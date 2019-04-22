import abc

class PoliticianStrategyAbstract(object):
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
        def search_congress(self):

class HouseRepStrategy(PoliticianStrategyAbstract):
    def search_congress(self):
        #checkhouse      

class SenateRepStrategy(PoliticianStrategyAbstract):
    def search_congress(self):
        #checksenate

class ExecBranchAbstract(object):
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def lights_on(self):
        """Required Method"""
        