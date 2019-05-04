import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup
from .celebrity import Celebrity
from abc import ABCMeta, abstractclassmethod
from .utilsAPI import WikiAPI, GoogleAPI

class Actor(Celebrity):

    def __init__(self, name, occupations):
        Celebrity.__init__(self, name, occupations)
        self.occID = 'actor'
        self.info = self.retrieve_info()
        self.bio = None
        self.titles = None
        self.upcoming = None

    def retrieve_info(self):
        nameID = getActorID(self.name)
        page = getActorPage(nameID)
        self.bio = WikiAPI().get_bio(self.name)
        self.titles = getKnownForTitles(page)
        self.upcoming = getUpcomingTitles(page)
        info = {
            'bio': self.bio,
            'image': GoogleAPI().get_image(self.name),
            'titles': self.titles,
            'upcoming': self.upcoming,
        }
        return info


class Builder(Actor):
    __metaclass__ = ABCMeta
    def set_name(self, value): pass
    def set_bio(self, value): pass
    def set_titles(self, value): pass
    def set_upcoming(self, value): pass
    def get_result(self): pass


class ActorBuilder(Builder):
    def __init__(self, name, occupations):
        self.actor = Actor(name, occupations)

    def set_bio(self, value):
        self.actor.bio = value
        return self
    def set_titles(self, value):
        self.actor.titles = value
        return self
    def set_upcoming(self, value):
        self.actor.upcoming = value
        return self
    def get_actor(self):
        return self.actor


class ActorBuilderDirector(object):
    @staticmethod
    def construct(name, occupations, bio, titles, upcoming, interview):
        return ActorBuilder(name, occupations).set_bio(bio).set_titles(titles).set_upcoming(upcoming).get_actor()


# Takes actor name and returns their imdb id
def getActorID(name):
    name = name.split(" ")
    query = name[0] + name[1]
    request = PreparedRequest()
    params = {query: 'nm'}
    request.prepare_url("https://www.imdb.com/find", params)

    html = requests.get(request.url).content
    page = BeautifulSoup(html, features="html.parser")
    id_num = str(page.find("td", {"class": "result_text"}).contents[1]).split('/')[2]
    return id_num

# Takes actor imdb id and returns their imdb page
def getActorPage(actorID):
    url = 'https://www.imdb.com/name/' + actorID
    html = requests.get(url).content
    actor_page = BeautifulSoup(html, features="html.parser")
    return actor_page
   
# Takes actor imdb page and returns films they are most known for
def getKnownForTitles(actor_page):
    titles = actor_page.find_all("a", {"class": "knownfor-ellipsis"})
    data = []
    i = 0
    while i < len(titles):
        att = (titles[i].attrs)
        data.append(att['title'])
        i+=1
    return data

def getUpcomingTitles(actor_page):
    response = actor_page.find_all("a", {"class": "in_production"})
    upcoming = []
    for link in response:
        title = link.previous_sibling.previous_sibling.find("a").get_text()
        upcoming.append(title)

    upcoming = list(dict.fromkeys(upcoming)) 
    return upcoming