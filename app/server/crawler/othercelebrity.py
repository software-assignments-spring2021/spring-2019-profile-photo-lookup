from .celebrity import Celebrity
from .wikiAPI import search_wiki

class OtherCelebrity(Celebrity):
    def __init__(self, name, occupations):
        self.name = name    
        self.occID = 'other'
        self.occupations = occupations
        self.info = self.retrieve_info(name)
    
    def retrieve_info(self, name):
        info= {}
        wiki_data = search_wiki(name)
        wiki_desc = wiki_data[2][0]
        info['bio']= wiki_desc
        return info

