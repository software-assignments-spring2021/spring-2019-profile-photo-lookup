from .athlete import Athlete
import wikipedia
import numpy as np
import sys
import json
import os
import googleapiclient.discovery

personal_life = ['Personal Life', 'Personal life', 'personal life']
awards = ['Award', 'Awards', 'award', 'awards']


#input example: "David Beckham"
#return string
def getSummary(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    try:
        result = wikipedia.WikipediaPage(title=name_with_underscore).summary
        result = result.encode('utf-8')
    except:
        result = np.NaN
    return result

#return string
def getPersonalLife(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    for i in personal_life:
        try:
            result = wikipedia.WikipediaPage(name_with_underscore).section(i)
            if result != None:
                result = result.encode('utf-8')
                return result
        except:
            result = np.NaN
    return result

#get award later
#return string
def getAwards(name):
    name_with_underscore,url_link = Athlete.getAthleteName(name)
    for i in awards:
        try:
            result = wikipedia.WikipediaPage(name_with_underscore).section(i)
            if result != None:
                result = result.encode('utf-8')
                return result
        except:
            result = np.NaN
    return result

# Don't use this yet, return string
def getExternalLinks(name):
    name_with_underscore, url_link = Athlete.getAthleteName(name)
    try:
        result = wikipedia.WikipediaPage(name_with_underscore).section('External links')
        result = result.encode('utf-8')
    except:
        result = np.NaN

    return result

# Get youtube highlight
# Input example: "David Beckham Highlights"
# return a list of Json object, each containing the file
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
                    print(result)
                except:
                    print("Cannot display format not in UTF-8!")

    return videoList
