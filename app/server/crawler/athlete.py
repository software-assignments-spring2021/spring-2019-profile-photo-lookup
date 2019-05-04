import requests
import copy
from requests.models import PreparedRequest
from bs4 import BeautifulSoup

# Refactored to have a cloneable class, so that information only need to be retrieved
# once. When youtube information is included, this prototype will help save a lot of
# bandwidth
#(Pushed to the wrong branch, now rebranching)
class Athlete:
    def __init__(self, name):
        name = name.lower()
        name = name.title()
        name_with_underscore = name.replace(" ", "_")
        request = PreparedRequest()
        request.prepare_url("https://en.wikipedia.org/wiki/", name)
        url_link = "https://en.wikipedia.org/wiki/" + name_with_underscore
        website_url = requests.get(url_link).text
        soup = BeautifulSoup(website_url, 'lxml')

        self.name = name
        self.name_with_underscore = name_with_underscore
        self.page = soup
        self.link = url_link

    def getNameWithUnderScore(self):
        return self.name_with_underscore

    # Page could not be print. should be used from athlete_helper file
    def getPage(self):
        return self.page

    def getLink(self):
        return self.link


def getAthleteName(name):
    name = name.replace(" ", "_")
    request = PreparedRequest()
    request.prepare_url("https://en.wikipedia.org/wiki/", name)

    url_link = "https://en.wikipedia.org/wiki/" + name
    return name, url_link

def getPage(name):
    name = name.replace(" ", "_")
    url_link = "https://en.wikipedia.org/wiki/" + name
    website_url = requests.get(url_link).text
    soup = BeautifulSoup(website_url, 'lxml')
    return(soup)

def getLink(name):
    request = PreparedRequest()
    request.prepare_url("https://en.wikipedia.org/wiki/", name)

    url_link = "https://en.wikipedia.org/wiki/" + name
    return url_link

def makeCopy():
    pageInformation = PageInformation()
    pageInformationCopy = copy.deepcopy(pageInformation)
    return pageInformationCopy

# Code Example:
#david = Athlete("lebron james")
#print(david.getNameWithUnderScore())
#print(david.getLink())
