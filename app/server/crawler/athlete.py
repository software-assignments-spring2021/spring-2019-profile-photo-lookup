from .celebrity import Celebrity
from .utilsAPI import WikiAPI, GoogleAPI
from bs4 import BeautifulSoup
import requests
import webbrowser
import urllib

class Athlete(Celebrity):
    def __init__(self, name, occupations):
        Celebrity.__init__ (self, name, occupations)
        self.occID = 'athlete'
        self.info = self.retrieve_info(self.name)

    def retrieve_info(self, name):
        info = {
            'bio': WikiAPI().get_bio(self.name),
            'image': GoogleAPI().get_image(self.name),
            'highlights': GoogleAPI().get_youtube_video(self.name + "highlight", "athlete"),
            'twitter': get_twitter(self.name),
            'insta': get_insta(self.name)
        }
        return info
    
    
def get_twitter(name):
    search = name + " twitter"
    search = urllib.parse.quote_plus(search)
    url = 'https://google.com/search?q=' + search
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'lxml')
    for g in soup.find_all(class_ =  'r'):
        res = g.text.split()[2]
        twitter_handle = res[2:(len(res)-1)]
        return twitter_handle



def get_insta(name):
    search = name + " instagram"
    search = urllib.parse.quote_plus(search)
    url = 'https://google.com/search?q=' + search
    response = requests.get(url)


    soup = BeautifulSoup(response.text, 'lxml')
    for g in soup.find_all(class_ =  'r'):
        res = g.text.split()[2]
        insta_handle = res[2:(len(res)-1)]
        return insta_handle 
