
from strategy import HouseRepStrategy
from strategy import SenateRepStrategy
from strategy import ExecBranchStrategy
from .celebrity import Celebirty
from .wikiAPI import search_wiki

house_rep = HouseRepStrategy()
senate_rep = SenateRepStrategy()
exec_branch = ExecBranchStrategy()


class Politician(Celebrity):
    def __init__(self, name, occupations):
        self.name= name
        self.occupations= occupations
        self.occID = 'politician'
        self.member_ID= 0
        self.strategy= self.determine_strategy()
        self.info = self.retrieve_info()

    def determine_strategy(self):
        self.strategy= senate_rep
        member_ID= politician.strategy.find_role()
        if member_ID== 0:
            self.strategy= house_rep
            member_ID= politician.strategy.find_role()
        self.member_ID= member_ID
        old_strategy= self.strategy
        self.strategy= exec_branch
        check= self.strategy.find_role()
        if check==1:
            self.strategy= exec_branch
        else:
            self.strategy= old_strategy

        return strategy 

    def retrieve_info(self):
        info= self.strategy.construct_profile()
        wiki_data = search_wiki(self.name)
        wiki_desc = wiki_data[2][0]
        info['bio']= wiki_desc

        return info

