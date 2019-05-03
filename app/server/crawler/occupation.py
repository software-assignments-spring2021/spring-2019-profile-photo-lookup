import re
import requests
from bs4 import BeautifulSoup

from .utilsAPI import WikiAPI, GoogleAPI

MUSICIAN = ['Musician', 'Singer', 'Songwriter', 'DJ']

ACTOR = ['Actor', 'Actress', 'Filmmaker', 'Director', 'Producer']

SPORT1 = ["basketball", "badminton", "archery", "baseball", "volleyball",
          "bmx", "bobsleigh", "canoe", "equestrian", "football", "soccer",
          "golf", "hockey", "judo","karate", "luge", "pentathlon", "rugby",
          "softball",  "table tennis", "taekwondo", "tennis", "trampoline",
          "triathlon", "water polo"]

SPORT2 = ["gymnast", "ski", "swimm", "box", "curl", "dive", "fenc",
          "figure skat", "mountain bik", "cycl","speed skat", "row",
          "sail", "shoot", "ski jump", "snow board", "surf", "weightlift",
          "wrestl", "driv", "sprint", "runn"]


def checkMusician(name, wiki_desc):
    roles = []
    rank = len(wiki_desc) + 1
    for role in MUSICIAN:
        if role.lower() in wiki_desc:
            rank = min(rank, wiki_desc.index(role.lower()))
            roles.append(role)
    return (rank, 'musician'), roles


def checkActor(name, wiki_desc):
    roles = []
    rank = len(wiki_desc) + 1
    for role in ACTOR:
        if role.lower() in wiki_desc:
            rank = min(rank, wiki_desc.index(role.lower()))
            roles.append(role)
    return (rank, 'actor'), roles


def checkPolitician(name, wiki_desc):
    roles = []
    rank = len(wiki_desc) + 1
    if 'politic' in wiki_desc:
        rank = min(rank, wiki_desc.index('politic'))
        roles.append('Politician')
    return (rank, 'politician'), roles


def checkAthlete(name, wiki_desc):
    roles = []
    rank = len(wiki_desc) + 1
    for sport in SPORT1:
        if sport in wiki_desc.lower():
            rank = min(rank, wiki_desc.index(sport))
            athlete_type= 'Professional ' + sport.title() + ' Player'
            roles.append(athlete_type)

    for sport in SPORT2:
        if sport in wiki_desc.lower():
            rank = min(rank, wiki_desc.index(sport))
            if(sport != "gymnast"):
                if(sport != "dive"):
                    sport= sport + 'er'
                else:
                    sport= sport + 'r'
            athlete_type= 'Professional ' + sport.title()
            roles.append(athlete_type)

    return (rank, 'athlete'), roles


def find_occupations(name):
    
    wiki_desc = WikiAPI().get_bio(name)
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
    if musician_rank[0] == actor_rank[0] == politician_rank[0] == athlete_rank[0]:
        occID = "other"
    else:
        rankings = [musician_rank, actor_rank, politician_rank, athlete_rank]
        occID = min(rankings, key = lambda t: t[0])[1]

    return occID, occupations