from strategy import HouseRepStrategy
from strategy import SenateRepStrategy
from strategy import ExecBranchStrategy

house_rep = HouseRepStrategy()
senate_rep = SenateRepStrategy()
exec_branch = ExecBranchStrategy()


class Politician(object):
    def __init__(self, congress_strategy, exec_strategy):
        self._congress_strategy= congress_strategy
        self._exec_strategy = exec_strategy
        self._profile= {}

    def check_congress(self):
        self._profile= self._congress_strategy.search_congess()

    def lights_on(self):
        self._profile= self._exec_strategy.check_exec()

# Types of Ducks
class President(Politician):
    def __init__(self):
        super(President, self).__init__(None, exec_branch)

    def get_profile(self):
        return self._profile
    
    def init_bio(self):
        wiki_data = search_wiki(name)
        wiki_desc= wiki_data[2][0]
        profile['bio']= wiki_desc


class CongressRep(Politician):
    def __init__(self):
        super(CongressRep, self).__init__(house_rep, exec_branch)
    
    def get_profile(self):
        return self._profile
    
    def init_bio(self):
        wiki_data = search_wiki(name)
        wiki_desc= wiki_data[2][0]
        profile['bio']= wiki_desc

class SenateRep(Politician):
    def __init__(self):
        super(SenateRep, self).__init__(senate_rep, exec_branch)

    def get_profile(self):
        return self._profile
    
    def init_bio(self):
        wiki_data = search_wiki(name)
        wiki_desc= wiki_data[2][0]
        profile['bio']= wiki_desc

# Note: Calling lights_on() on CityDuck or VillageDuck will result in AttributeError
poli= Politician()
