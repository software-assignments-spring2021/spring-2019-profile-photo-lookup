import requests
import json

from .politicianstrategy import HouseRepStrategy
from .politicianstrategy import SenateRepStrategy
from .politicianstrategy import ExecBranchStrategy
from .celebrity import Celebrity
from .utilsAPI import WikiAPI, GoogleAPI

class Politician(Celebrity):
    def __init__(self, name, occupations):
        Celebrity.__init__ (self, name, occupations)
        self.name = self.get_full_name(name)
        self.occID = 'politician'
        self.strategy = self.determine_strategy()
        self.info = self.retrieve_info(name)

    def get_full_name(self, name):
        split_name= name.split(" ")
        last_name= split_name[1]
        wiki_desc = WikiAPI().get_bio(name)
        first_para= wiki_desc.split(" ")
        first_name= first_para[0]
        new_name= first_name + " " + last_name
        return new_name

    def checkHouseRep(self):
        with open('./crawler/asset/house.json') as house_file:    
            data = json.load(house_file)

        name = self.name.split(" ")

        for term, result in data.items():
            for member in result[0]["members"]:
                if(member["last_name"] == name[1]) and (member["first_name"]== name[0]):
                    return term, member
        return 0, None

    def checkSenate(self):
        with open('./crawler/asset/senate.json') as senate_file:    
            data = json.load(senate_file)
        
        name = self.name.split(" ")

        for term, result in data.items():
            for member in result[0]["members"]:
                if(member["last_name"] == name[1]) and (member["first_name"]== name[0]):
                    return term, member
        return 0, None   

    def checkExecs(self):
        data = requests.get("https://theunitedstates.io/congress-legislators/executive.json").json()
        name = self.name.split(" ")
        for exec in data:
            if(exec["name"]["first"] == name[0] and exec["name"]["last"] == name[1]):
                return 1, exec
        return 0, None


    def determine_strategy(self):
        exec, member = self.checkExecs()
        if exec == 0:
            senateTerm, member = self.checkSenate()
            if senateTerm == 0:
                _, member = self.checkHouseRep()
                return HouseRepStrategy(member)
            else:
                return SenateRepStrategy(member)
        else:
            return ExecBranchStrategy(member)
        return None

    def retrieve_info(self, name):
        info = {}
        if self.strategy:
            info = self.strategy.collect_info()
        wiki_desc = WikiAPI().get_bio(name)
        info['bio']= wiki_desc
        info['image']= GoogleAPI().get_image(name)
        return info

