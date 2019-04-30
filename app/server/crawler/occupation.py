import re
import requests
from .wikiAPI import search_wiki
from bs4 import BeautifulSoup

MUSICIAN = ['Musician', 'Singer', 'Songwriter', 'DJ', 'Record Producer']

ACTOR = ['Actor', 'Actress', 'Filmmaker', 'Director', 'Producer']

SPORT1 = ["basketball", "badminton", "archery", "baseball", "volleyball",
          "bmx", "bobsleigh", "canoe", "equestrian", "football", "soccer",
          "golf", "hockey", "judo","karate", "luge", "pentathlon", "rugby",
          "softball",  "table tennis", "taekwondo", "tennis","trampoline",
          "triathlon", "water polo"]

SPORT2 = ["gymnast", "ski", "swimm", "box", "curl", "dive", "fenc",
          "figure skat", "mountain bik", "cycl","speed skat", "row",
          "sail", "shoot", "ski jump", "snow board", "surf", "weightlift",
          "wrestl", "driv", "sprint", "runn"]


def checkMusician(name, wiki_desc):
    roles = []
    desc_list = wiki_desc.split()
    musician_rank = len(desc_list) + 1
    for role in MUSICIAN:
        if role.lower() in wiki_desc:
            musician_rank = min(musician_rank,
                                desc_list.index(role.lower()))
            roles.append(role)
    return musician_rank, roles


def checkActor(name, wiki_desc):
    roles = []
    desc_list = wiki_desc.split()
    actor_rank = len(desc_list) + 1
    for role in ACTOR:
        if role.lower() in wiki_desc:
            actor_rank = min(actor_rank,
                             desc_list.index(role.lower()))
            roles.append(role)
    return actor_rank, roles


def checkPolitician(name, wiki_desc):
    roles = []
    desc_list = wiki_desc.split()
    politician_rank = len(desc_list) + 1
    if 'politician' in wiki_desc:
        politician_rank = min(politician_rank,
                              desc_list.index('politician'))
        roles.append('Politician')
        pres= re.search("[\w]+ (president of the United States)", wiki_desc)
        world_leader= re.search("([A-Z][a-z]+ )+(of )(the )*([A-Z][a-z]+('s )*[of ]*)+", wiki_desc)
        if(pres):
            roles.append(pres[0].title())
        elif(world_leader):
            roles.append(world_leader[0])

    return politician_rank, roles


def checkAthlete(name, wiki_desc):
    roles = []
    desc_list = wiki_desc.split()
    athlete_rank = len(desc_list) + 1
    for sport in SPORT1:
        if sport in wiki_desc.lower():
            athlete_rank = min(athlete_rank,
                               desc_list.index(sport))
            athlete_type= 'Professional ' + sport.title() + ' Player'
            roles.append(athlete_type)

    for sport in SPORT2:
        if sport in wiki_desc.lower():
            if occID == '':
                occID = 'athlete'
            if(sport != "gymnast"):
                if(sport != "dive"):
                    sport= sport + 'er'
                else:
                    sport= sport + 'r'
            athlete_type= 'Professional ' + sport.title()
            roles.append(athlete_type)
    return athlete_rank, roles


def findPrimaryOccupation(rankings, wiki_desc):
    indx = min(rankings)
    desc = wiki_desc.split()
    occID = 'other'

    if(indx < len(desc)):
        occupation = desc[indx]
        if occupation in [x.lower() for x in MUSICIAN]:
            occID = 'musician'
        elif occupation in [x.lower() for x in ACTOR]:
            occID = 'actor'
        elif occupation == 'politician':
            occID = 'politician'
        elif occupation in SPORT1 or occupation in SPORT2:
            occID = 'athlete'

    return occID


def find_occupations(name):

    data = search_wiki(name)
    wiki_desc = re.sub(r'[^\w\s]', ' ', data[2][0].lower())
    occupations = []

    # Musicians
    result = checkMusician(name, wiki_desc)
    musician_rank = result[0]
    occupations.extend(result[1])

    # Actor
    result = checkActor(name, wiki_desc)
    actor_rank = result[0]
    occupations.extend(result[1])

    #Politicians
    result = checkPolitician(name, wiki_desc)
    politician_rank = result[0]
    occupations.extend(result[1])

    # Athletes
    result = checkAthlete(name, wiki_desc)
    athlete_rank = result[0]
    occupations.extend(result[1])

    # Determine Primary Occupation
    rankings = [musician_rank, actor_rank, politician_rank, athlete_rank]
    occID = findPrimaryOccupation(rankings, wiki_desc)

    return occID, occupations
