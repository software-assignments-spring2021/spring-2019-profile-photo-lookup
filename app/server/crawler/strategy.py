from strategy import HouseRepStrategy
from strategy import SenateRepStrategy
from strategy import ExecBranchStrategy

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

# #Types of Politicians 
# class President(Politician):
#     def __init__(self, name):
#         super(President, self).__init__(name, occupations)
#         self.strategy= exec_branch


# class CongressRep(Politician):
#     def __init__(self, name):
#         super(CongressRep, self).__init__(name, occupations)
#         self.strategy= house_rep

# class SenateRep(Politician):
#     def __init__(self, name):
#         super(SenateRep, self).__init__(name, occupations)
#         self.strategy= senate_rep