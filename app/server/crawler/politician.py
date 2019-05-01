from .politicianstrategy import HouseRepStrategy
from .politicianstrategy import SenateRepStrategy
from .politicianstrategy import ExecBranchStrategy
from .celebrity import Celebrity
from .utilsAPI import WikiAPI, GoogleAPI

house_rep= HouseRepStrategy()
senate_rep= SenateRepStrategy()
exec_branch= ExecBranchStrategy()

class Politician(Celebrity):
    def __init__(self, name, occupations):
        self.name= self.get_name(name)
        self.occupations= occupations
        self.occID = 'politician'
        self.member_ID= 0
        self.strategy= self.determine_strategy()
        self.info = self.retrieve_info(name)

    def get_name(self, name):
        split_name= name.split(" ")
        last_name= split_name[1]
        wiki_data = WikiAPI().search(name)
        wiki_desc = wiki_data[2][0]
        first_para= wiki_desc.split(" ")
        first_name= first_para[0]
        new_name= first_name + " " + last_name
        return new_name

    def determine_strategy(self):
        self.strategy= senate_rep
        member_ID= self.strategy.find_role(self)
        if member_ID== 0:
            self.strategy= house_rep
            member_ID= self.strategy.find_role(self)
        self.member_ID= member_ID
        if(member_ID==0):
            self.strategy= None
        old_strategy= self.strategy
        self.strategy= exec_branch
        check= self.strategy.find_role(self)
        if check==1:
            self.strategy= exec_branch
        else:
            self.strategy= old_strategy
        strategy=self.strategy
        return strategy 

    def retrieve_info(self, name):
        info= {}
        if self.strategy != None:
            info= self.strategy.construct_profile(self)
        wiki_data = WikiAPI().search(name)
        wiki_desc = wiki_data[2][0]
        info['bio']= wiki_desc
        info['image']= GoogleAPI().get_image(name)
        return info

