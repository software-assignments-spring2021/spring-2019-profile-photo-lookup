from strategy import HouseRepStrategy
from strategy import SenateRepStrategy
from strategy import ExecBranchStrategy

house_rep = HouseRepStrategy()
senate_rep = SenateRepStrategy()
exec_branch = ExecBranchStrategy()


class Politician(Celebrity):
    def __init__(self, name, strategy):
        self.name= name
        self.strategy= strategy
        self.occID = 'politician'
        self.info = {}

    def retrieve_info(self):
        info= self.strategy.construct_profile()
        wiki_data = search_wiki(self.name)
        wiki_desc = wiki_data[2][0]
        info['bio']= wiki_desc

        return info

#Types of Politicians 
class President(Politician):
    def __init__(self, name):
        super(President, self).__init__(name, senate_rep)


class CongressRep(Politician):
    def __init__(self, name):
        super(CongressRep, self).__init__(name, house_rep)

class SenateRep(Politician):
    def __init__(self, name):
        super(SenateRep, self).__init__(name, exec_branch)

def main(name):
    politician= SenateRep(name)
    member_ID= politician.strategy.find_role()
    if member_ID== 0:
        politician= CongressRep()
        member_ID= politician.strategy.find_role()
    if member_ID!=0:
        profile= politician.strategy.construct_profile()
    politician.strategy= exec_branch
    check= politician.strategy.find_role()
    if check==1:
        politician= President()
        profile= politician.strategy.construct_profile()
    politician.retrieve_info()