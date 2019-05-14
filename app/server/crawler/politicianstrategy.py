import abc
import json
import requests 
import re


class PoliticianStrategyAbstract(object):
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def __init__(self, member, term):
        self.member = member
        self.term = term

    @abc.abstractmethod
    def collect_info(self):
        pass


class HouseRepStrategy(PoliticianStrategyAbstract):
    def collect_info(self):
        member = self.member
        info = {
            "title": "Former U.S Representative",
            "party": find_party(member["party"]),
            "state": member["state"],
            "website": member["url"],
            "twitter": member["twitter_account"],
            "facebook": member["facebook_account"],
            "phone": member["phone"],
            "address": member["office"],
            "loyalty": member["votes_with_party_pct"]
        }

        if self.term == "115":
            info["title"] = "U.S Representative"

        return info

    def __str__(self):
        return "House"


class SenateRepStrategy(PoliticianStrategyAbstract):
    def collect_info(self):
        member = self.member
        info = {
            "title": "Former U.S. Senator",
            "party": find_party(member["party"]),
            "state": member["state"],
            "website": member["url"],
            "twitter": member["twitter_account"],
            "facebook": member["facebook_account"],
            "phone": member["phone"],
            "address": member["office"],
            "loyalty": member["votes_with_party_pct"]
        }

        if member["office"]:
            info["address"] = re.sub(" ", "%20", member["office"])

        if self.term == "115":
            info["title"] = "U.S Senator"

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
            info['title']= "Former Vice President of the United States"
            info['party'] = term["party"]
            if term["type"] == "prez":
                info['title'] = "Former President of the United States"
                info['party'] = term["party"]
                break
                
        if member["name"]["first"] + " " + member["name"]["last"] == "Donald Trump":
            info['title'] = "President of the United States"
        if member["name"]["first"] + " " + member["name"]["last"] == "Mike Pence":
            info['title'] = "Vice President of the United States"

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


        