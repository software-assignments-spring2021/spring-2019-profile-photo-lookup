import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup

class pageInformation(name):
    this.name = name
    this.name_with_underscore = name = name.replace(" ", "_")
    this.page = getPage(name)
    name, info = getAthleteName(name)
    this.link = info

def getAthleteName(name):
    name = name.replace(" ", "_")
    request = PreparedRequest()
    request.prepare_url("https://en.wikipedia.org/wiki/", name)

    url_link = "https://en.wikipedia.org/wiki/" + name
    return name, url_link

#print(getAthleteName("Lee Chong Wei"))

# Web crawl once so that dont have to do it twice
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
