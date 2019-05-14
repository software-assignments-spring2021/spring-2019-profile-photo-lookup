import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup
from abc import ABCMeta, abstractclassmethod

from .celebrity import Celebrity
from .utilsAPI import WikiAPI, GoogleAPI


class Actor(Celebrity):

    def __init__(self, name, occupations):
        Celebrity.__init__(self, name, occupations)
        self.occID = 'actor'
        self.bio = None
        self.known_titles = None
        self.known_posters = None
        self.upcoming_titles = None
        self.twitter = None
        self.insta = None
        self.info = self.retrieve_info()

    def retrieve_info(self):
        nameID = getID(self.name)
        page = getPage(nameID)
        self.bio = WikiAPI().get_bio(self.name)
        self.known_titles = getKnownTitles(page)
        self.known_posters = getKnownPosters(page)
        self.upcoming_titles = getUpcomingTitles(page)
        self.twitter = GoogleAPI().get_twitter(self.name)
        self.insta = GoogleAPI().get_insta(self.name)
        info = {
            'bio': self.bio,
            'image': GoogleAPI().get_image(self.name + "portrait"),
            'known titles': self.known_titles,
            'known posters': self.known_posters,
            'upcoming titles': self.upcoming_titles,
            'twitter': self.twitter,
            'insta': self.insta,
            'trailer': GoogleAPI().get_youtube_video(self.name + 'trailer', 'actor')
        }
        return info


class Builder(Actor):
    __metaclass__ = ABCMeta
    def set_bio(self, value): pass
    def set_known_titles(self, value): pass
    def set_known_posters(self, value): pass
    def set_upcoming_titles(self, value): pass
    def set_twitter(self, value): pass
    def set_insta(self, value): pass
    def get_result(self): pass


class ActorBuilder(Builder):
    def __init__(self, name, occupations):
        self.actor = Actor(name, occupations)

    def set_bio(self, value):
        self.actor.bio = value
        return self
    def set_known_titles(self, value):
        self.actor.known_titles = value
        return self
    def set_known_posters(self, value):
        self.actor.known_posters = value
        return self
    def set_upcoming_titles(self, value):
        self.actor.upcoming_titles = value
        return self
    def set_twitter(self, value):
        self.actor.twitter = value
        return self
    def set_insta(self, value):
        self.actor.insta = value
        return self
    def get_actor(self):
        return self.actor


class ActorBuilderDirector(object):
    @staticmethod
    def construct(name, occupations, bio, titles, posters, upcoming, insta, twitter):
        return ActorBuilder(name, occupations).set_bio(bio).set_known_titles(titles).set_known_posters(posters).set_upcoming_titles(upcoming).set_twitter(twitter).set_insta(insta).get_actor()


# Takes actor name and returns their imdb id
def getID(name):
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
def getPage(actorID):
    url = 'https://www.imdb.com/name/' + actorID
    html = requests.get(url).content
    actor_page = BeautifulSoup(html, features="html.parser")
    return actor_page
   

# Takes actor imdb page and returns films they are most known for
def getKnownTitles(actor_page):
    div = actor_page.find_all("a", {"class": "knownfor-ellipsis"})
    titles = []
    for title in div:
        titles.append(title.getText())
    return titles


# Return the poster of the films they are known for
def getKnownPosters(actor_page):
    div = actor_page.find_all("div", {"class": "knownfor-title"})
    posters = []
    for child in div:
        poster = child.find("div", {"class": "uc-add-wl-widget-container"}).find("a").find('img')['src']
        posters.append(poster)
    return posters


# Takes actor imdb page and returns their upcoming films
def getUpcomingTitles(actor_page):

    response = actor_page.find_all("a", {"class": "in_production"})
    upcoming = []
    for link in response:
        title = link.previous_sibling.previous_sibling.find("a").get_text()
        upcoming.append(title)

    upcoming = list(dict.fromkeys(upcoming)) 
    return upcoming
