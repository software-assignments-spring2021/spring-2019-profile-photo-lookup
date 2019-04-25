import re
import requests
from .wikiAPI import search_wiki
from bs4 import BeautifulSoup

MUSICIAN = ['music', 'sing', 'song', 'DJ', 'record', 'remix', 'singer-songwriter']

SPORT1 = ["basketball", "badminton", "archery", "baseball", "volleyball", 
"bmx", "bobsleigh", "canoe", "equestrian", "football", "soccer", "golf", "hockey", "judo", 
"karate", "luge", "pentathlon", "rugby",  "softball",  "table tennis", "taekwondo", "tennis", 
"trampoline", "triathlon", "water polo"]

SPORT2 = ["gymnast", "ski", "swimm", "box", "curl", "dive", "fenc", "figure skat", "mountain bik", "cycl", 
"speed skat", "row", "sail", "shoot", "ski jump", "snow board", "surf", "weightlift", "wrestl", "driv", "sprint", "runn"]

def repl_func(m):
    """process regular expression match groups for word upper-casing problem"""
    return m.group(1) + m.group(2).upper()

def find_occupations(name):

    data = search_wiki(name)

    wiki_desc = data[2][0]
    wiki_url = data[3][0]
    wiki_html = requests.get(wiki_url).content
    wiki_page = BeautifulSoup(wiki_html, features="html.parser")

    occID = ''
    occupations = []

    # Actor and Musicians
    info_card = wiki_page.find("td", {"class": "role"})
    info_card_alt = info_card.find('a', {'class': 'mw-redirect'}).attrs['title'].lower()
    

        
            

    #print(info_card)
  
    if info_card is not None:
        alt = info_card.find('a', {'class': 'mw-redirect'}).attrs['title'].lower()
        if alt is not None:
            if alt == 'singer':
                occID = 'musician'
                occupations.append('Singer')
                return occID, occupations
        for occ in info_card.findChildren('li'):
            
            occ = re.sub("(^|\s)(\S)", repl_func, occ.contents[0])
            print(occ)
            occupations.append(occ)
            for term in MUSICIAN:
                if term in occ.lower():
                    occID = 'musician'
                    continue
                
            if 'act' in occ.lower():
                occID = 'actor'
                continue
 
    
        

        
    if 'actor' in wiki_desc.lower():
        occID = 'actor'
        occupations.append('Actor')
        
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
