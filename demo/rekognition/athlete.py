import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup

def getAthleteName(name):
    name = name.replace(" ", "_")
    request = PreparedRequest()
    request.prepare_url("https://en.wikipedia.org/wiki/", name)

    url_link = "https://en.wikipedia.org/wiki/" + name
    return name, url_link

#print(getAthleteName("Lee Chong Wei"))


def getPage(name):
    name = name.replace(" ", "_")
    url_link = "https://en.wikipedia.org/wiki/" + name
    website_url = requests.get(url_link).text
    soup = BeautifulSoup(website_url, 'lxml')
    return(soup)
