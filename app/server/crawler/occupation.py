import re
import requests
from bs4 import BeautifulSoup

SPORTS = ['football', 'basketball', 'baseball', 'soccer',
          'hockey', 'tennis', 'volleyball', 'cricket', 'rugby']

SPORTER = ['swimmer', 'golfer', 'boxer', 'fencer', 'wrestler']

SPORT_OTHER = ['gymnast']

def repl_func(m):
    """process regular expression match groups for word upper-casing problem"""
    return m.group(1) + m.group(2).upper()


def find_occupations(wiki_data):
    output = {}
    for indx, result in enumerate(wiki_data):
        name = result[1][0]
        wiki_desc = result[2][0]
        wiki_url = result[3][0]
        wiki_html = requests.get(wiki_url).content
        wiki_page = BeautifulSoup(wiki_html, features="html.parser")

        occupations = []
        # Actor and Muscians
        info_card = wiki_page.find("td", {"class": "role"})
        if info_card is not None:
            for occ in info_card.findChildren('li'):
                occ = re.sub("(^|\s)(\S)", repl_func, occ.contents[0])
                occupations.append(occ)

        # Politicians
        if 'politician' in wiki_desc.lower():
            occupations.append('Politician')

        # Athletes
        for sport in SPORTS:
            if sport in wiki_desc.lower():
                occupations.append('Professional ' + sport.title() + ' Player')

        output[name] = occupations

    return output
