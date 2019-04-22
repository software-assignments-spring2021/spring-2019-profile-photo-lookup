from strategy import HouseRepStrategy
from strategy import SenateRepStrategy
from strategy import ExecBranchStrategy

house_rep = HouseRepStrategy()
senate_rep = SenateRepStrategy()
exec_branch = ExecBranchStrategy()


class Politician(object):
    def __init__(self, congress_strategy, exec_strategy, name):
        self._congress_strategy= congress_strategy
        self._exec_strategy = exec_strategy
        self._profile= {}
        self._name= name
        self._memberID= 0

    def check_congress(self):
        return self._congress_strategy.search_congess()

    def construct_profile(self):
        if(self._congress_strategy!= None):
            self._profile= self._congress_strategy.construct_profile()
        else:
            self._profile= self._exec_strategy.construct_profile()

    def check_exec(self):
        execs= requests.get("https://theunitedstates.io/congress-legislators/executive.json").json()
        name= self._name.split(" ")
        president={}
        profile=self._profile
        check= ""
        for pres in execs:
            pname= pres["name"]
            first_name= pname["first"]
            last_name= pname["last"]
            if(first_name== name[0] and last_name== name[1]):
                return 1
        return 0
    
    def get_name(self):
        return self._name

    def get_profile(self):
        return self._profile
    
    def init_bio(self):
        wiki_data = search_wiki(name)
        wiki_desc= wiki_data[2][0]
        profile['bio']= wiki_desc

# Types of Ducks
class President(Politician):
    def __init__(self):
        super(President, self).__init__(None, exec_branch)


class CongressRep(Politician):
    def __init__(self):
        super(CongressRep, self).__init__(house_rep, exec_branch)

class SenateRep(Politician):
    def __init__(self):
        super(SenateRep, self).__init__(senate_rep, exec_branch)

def main(name):
    politician= Politician(senate_rep, None, name)
    member_ID= politician._congress_strategy.search_congess()
    if member_ID== 0:
        politician._congress_strategy= house_rep
        member_ID= politician._congress_strategy.search_congess()
    if member_ID!=0:
        profile= politician._congress_strategy.construct_profile()
    check= politician.check_exec()
    if check==1:
        politician._congress_strategy= None
        politician._exec_strategy= exec_branch
        profile= politician._exec_strategy.construct_profile()
    
    politician.init_bio() 
