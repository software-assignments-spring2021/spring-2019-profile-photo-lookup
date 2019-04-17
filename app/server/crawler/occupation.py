import re
import requests
from bs4 import BeautifulSoup

MUSICIAN = ['music', 'sing', 'song', 'DJ', 'record', 'remix']

SPORT1 = ["basketball", "badminton", "archery", "baseball", "volleyball", 
"bmx", "bobsleigh", "canoe", "equestrian", "football", "soccer", "golf", "hockey", "judo", 
"karate", "luge", "pentathlon", "rugby",  "softball",  "table tennis", "taekwondo", "tennis", 
"trampoline", "triathlon", "water polo"]

SPORT2 = ["gymnast", "ski", "swimm", "box", "curl", "dive", "fenc", "figure skat", "mountain bik", "cycl", 
"speed skat", "row", "sail", "shoot", "ski jump", "snow board", "surf", "weightlift", "wrestl", "driv", "sprint", "runn"]

def repl_func(m):
    """process regular expression match groups for word upper-casing problem"""
    return m.group(1) + m.group(2).upper()

def find_occupations(data):
    wiki_desc = data[2][0]
    wiki_url = data[3][0]
    wiki_html = requests.get(wiki_url).content
    wiki_page = BeautifulSoup(wiki_html, features="html.parser")

    occID = ''
    occupations = []

    # Actor and Musicians
    info_card = wiki_page.find("td", {"class": "role"})
    if info_card is not None:
        for occ in info_card.findChildren('li'):
            occ = re.sub("(^|\s)(\S)", repl_func, occ.contents[0])
            occupations.append(occ)
            for term in MUSICIAN:
                if term in occ.lower():
                    occID = 'musician'
                    continue
            if 'act' in occ.lower():
                occID = 'actor'
                continue

    #Politicians
    if 'politic' in wiki_desc.lower():
        occID= 'politician'
        occupations.append('Politician')
        pres= re.search("[\w]+ (president of the United States)", wiki_desc)
        world_leader= re.search("([A-Z][a-z]+ )+(of )(the )*([A-Z][a-z]+('s )*[of ]*)+", wiki_desc)
        if(pres):
            occupations.append(pres[0].title())
        elif(world_leader):
           occupations.append(world_leader[0])


    # Athletes
    for sport in SPORT1:
        if sport in wiki_desc.lower():
            athlete_type= 'Professional ' + sport.title() + ' Player'
            occupations.append(athlete_type)
            occID = 'athlete'

    for sport in SPORT2:
        if sport in wiki_desc.lower():
            if(sport != "gymnast"):
                if(sport != "dive"):
                    sport= sport + 'er'
                else:
                    sport= sport + 'r'
            athlete_type= 'Professional ' + sport.title()
            occupations.append(athlete_type)
            occID = 'athlete'

    return occID, occupations
