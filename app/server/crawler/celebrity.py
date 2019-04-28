class Celebrity(object):

    def __init__(self, name, occupations):
        self.name = name    
        self.occID = ''
        self.occupations = occupations
        self.info = {}

        
    def generate_profile(self):
        profile = {
            'name': self.name,
            'occID': self.occID,
            'occupations': self.occupations,
            'info': self.info
        }

        return profile
