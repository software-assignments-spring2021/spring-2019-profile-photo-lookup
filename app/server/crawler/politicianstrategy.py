import abc
import json
import requests 

class PoliticianStrategyAbstract(object):
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def __init__(self, member):
        self.member = member

    @abc.abstractmethod
    def collect_info(self):
        pass

class HouseRepStrategy(PoliticianStrategyAbstract):
    def collect_info(self):
        member = self.member
        info = {
            "title": "U.S Representative",
            "party": find_party(member["party"]),
            "state": member["state"],
            "website": member["url"],
            "twitter": member["twitter_account"],
            "facebook": member["facebook_account"],
            "phone": member["phone"],
            "address": member["office"],
            "loyalty": member["votes_with_party_pct"]
        }

        return info

    def __str__(self):
        return "House"

class SenateRepStrategy(PoliticianStrategyAbstract):
    def collect_info(self):
        member = self.member
        info = {
            "title": "U.S. Senator",
            "party": find_party(member["party"]),
            "state": member["state"],
            "website": member["url"],
            "twitter": member["twitter_account"],
            "facebook": member["facebook_account"],
            "phone": member["phone"],
            "address": member["office"],
            "loyalty": member["votes_with_party_pct"]
        }
        return info

    def __str__(self):
        return "Senate"

class ExecBranchStrategy(PoliticianStrategyAbstract):

    def collect_info(self):
        member = self.member
        info = {
            "role": "executive",
            "birthday": member["bio"]["birthday"],
            "terms": member["terms"],
            "title": ""
        }

        for term in member["terms"]:
            info['title']= "Vice President of the United States"
            info['party'] = term["party"]
            if term["type"] == "prez":
                info['title'] = "President of the United States"
                info['party'] = term["party"]
                break

        return info

    def __str__(self):
        return "Executive"



def find_party(abrev):
    if abrev == "R":
        return "Republican"
    elif abrev == "D":
        return "Democrat"
    else:
        return "Other"

def download_data():
    headers = {"X-API-Key": "KgI2lOueGBFwLYWYsicnT4PSQUblFGDEpfj2Gcdd"}

    house = {}
    house_term = 115
    while house_term >= 102:
        print("H:", house_term)
        url = "https://api.propublica.org/congress/v1/" + str(house_term)+ "/house/members"
        response = requests.get(url, headers=headers)
        house[str(house_term)] = response.json()['results']
        house_term -= 1

    senate = {}
    senate_term = 115
    while senate_term >= 80:
        print("S:", senate_term)
        url = "https://api.propublica.org/congress/v1/" + str(senate_term)+ "/senate/members"
        response = requests.get(url, headers=headers)
        senate[str(senate_term)] = response.json()['results']
        senate_term -= 1

    with open('house.json', 'w') as house_file:  
        json.dump(house, house_file)

    with open('senate.json', 'w') as senate_file:  
        json.dump(senate, senate_file)
    
    return


        