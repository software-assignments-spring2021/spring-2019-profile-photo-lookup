import requests
from requests.models import PreparedRequest
from bs4 import BeautifulSoup

def getAthleteName(name):
    name = name.replace(" ", "_")
    request = PreparedRequest()
    request.prepare_url("https://en.wikipedia.org/wiki/", name)

    url_link = "https://en.wikipedia.org/wiki/" + name
    return name, url_link

print(getAthleteName("Lee Chong Wei"))
