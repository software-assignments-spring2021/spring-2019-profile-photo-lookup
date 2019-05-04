import requests
import copy
#from .athlete_helper import Athlete_helper
import sys
import wikipedia
import numpy as np
import json
import os
from .celebrity import Celebrity
import googleapiclient.discovery
from requests.models import PreparedRequest
from bs4 import BeautifulSoup
from .wikiAPI import get_image

# Refactored to have a cloneable class, so that information only need to be retrieved
# once. When youtube information is included, this prototype will help save a lot of
# bandwidth

class Athlete(Celebrity):
    def __init__(self, name, occupation):
        self.name = self.getName(name)
        self.name_with_underscore = self.getNameWithUnderScore(self.name)
        self.link = self.getLink(self.name_with_underscore)
        self.occID = 'athlete'
        self.occupations = 'athlete'
        self.info = self.retrieve_info(self.name)
        self.page = self.getPage(self.name_with_underscore)

    def getName(self, name):
        name = name.lower()
        name = name.title()
        return name

    def getNameWithUnderScore(self, name):
        name_with_underscore = name.replace(" ", "_")
        return name_with_underscore

    # Page could not be print. should be used from athlete_helper file
    def getPage(self, name_with_underscore):
        request = PreparedRequest()
        request.prepare_url("https://en.wikipedia.org/wiki/", name_with_underscore)
        url_link = "https://en.wikipedia.org/wiki/" + name_with_underscore
        website_url = requests.get(url_link).text
        soup = BeautifulSoup(website_url, 'lxml')
        return soup

    def getLink(self, name_with_underscore):
        url_link = "https://en.wikipedia.org/wiki/" + name_with_underscore
        return url_link

    def retrieve_info(self, name):
       self.bio = getSummary(name)
       self.personal_life  = getPersonalLife(name)
       self.highlights = getVideo(name, 1)
       try:
           self.image = get_image(name)
       except:
           self.image = None
       info = {
          'bio': self.bio,
          'personal_life': self.personal_life,
          'highlights': self.highlights,
          'image': self.image,
       }
       return info

def getAthleteName(name):
    name = name.lower()
    name = name.title()
    name = name.replace(" ", "_")
    request = PreparedRequest()
    request.prepare_url("https://en.wikipedia.org/wiki/", name)

    url_link = "https://en.wikipedia.org/wiki/" + name
    return name, url_link

def getPage(name):
    name = name.lower()
    name = name.title()
    name = name.replace(" ", "_")
    url_link = "https://en.wikipedia.org/wiki/" + name
    website_url = requests.get(url_link).text
    soup = BeautifulSoup(website_url, 'lxml')
    return(soup)

def getLink(name):
    name = name.lower()
    name = name.title()
    request = PreparedRequest()
    request.prepare_url("https://en.wikipedia.org/wiki/", name)

    url_link = "https://en.wikipedia.org/wiki/" + name
    return url_link

def makeCopy():
    pageInformation = PageInformation()
    pageInformationCopy = copy.deepcopy(pageInformation)
    return pageInformationCopy


def getSummary(name):
    name_with_underscore,url_link = getAthleteName(name)
    try:
        result = wikipedia.WikipediaPage(title=name_with_underscore).summary
        result = result.encode('utf-8')
    except:
        result = np.NaN
    return result

def getPersonalLife(name):
    personal_life = ['Personal Life', 'Personal life', 'personal life']
    name_with_underscore,url_link = getAthleteName(name)
    for i in personal_life:
        try:
            result = wikipedia.WikipediaPage(name_with_underscore).section(i)
            if result != None:
                result = result.encode('utf-8')
                return result
        except:
            result = np.NaN
    return result

def getVideo(name, num_of_results):
    videoList = []
    query = name + "highlights"
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    DEVELOPER_KEY = "AIzaSyA3a9G_aBAfROe6uVPOfOGxdqSiOEcR8wE"

    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, developerKey = DEVELOPER_KEY)

    request = youtube.search().list(
        part="snippet",
        maxResults=num_of_results,
        q=query

    )
    response = request.execute()
    for k, v in response.items():
        if k == "items":
            for i in range(len(v)):
                try:
                    result = json.dumps(v[i], sort_keys=True)
                    videoList.append(result)
                except:
                    print("Cannot display format not in UTF-8!")

    for item in videoList:
        item = json.loads(item)
    return videoList
