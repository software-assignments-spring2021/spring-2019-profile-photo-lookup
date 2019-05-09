from .celebrity import Celebrity
from .utilsAPI import WikiAPI, GoogleAPI

class PublicFigure(Celebrity):
    def __init__(self, name, occupations):
        Celebrity.__init__ (self, name, occupations)
        self.occID = "other"
        self.info = self.retrieve_info()
    
    def retrieve_info(self):
        info = {
            "bio": WikiAPI().get_bio(self.name),
            "image": GoogleAPI().get_image(self.name)
        }
        return info

