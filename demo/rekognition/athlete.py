import requests
import copy
from requests.models import PreparedRequest
from bs4 import BeautifulSoup

# Refactored to have a cloneable class, so that information only need to be retrieved
# once. When youtube information is included, this prototype will help save a lot of
# bandwidth
#(Pushed to the wrong branch, now rebranching)
class pageInformation:
    def __init__(self, name):
        name_with_underscore = name.replace(" ", "_")
        request = PreparedRequest()
        request.prepare_url("https://en.wikipedia.org/wiki/", name)
        url_link = "https://en.wikipedia.org/wiki/" + name
        website_url = requests.get(url_link).text
        soup = BeautifulSoup(website_url, 'lxml')

        this.name = name
        this.name_with_underscore = name_with_unscore
        this.page = soup
        this.link = url_link

    def getNameWithUnderScore():
        return this.name_with_unscore

    def getPage():
        return this.page

    def getLink():
        return this.link


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
