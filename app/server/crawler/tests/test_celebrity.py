from django.test import TestCase
from ..celebrity import Celebrity

class CelebrityTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(CelebrityTest, self).__init__(*args, **kwargs)
        self.name = "Bernie Sanders"
        self.occupations = ["Politician"]
        self.celebrity = Celebrity(self.name, self.occupations)
        self.occID= ''

    def test_generateProfile(self):
        self.celebrity.profile= self.celebrity.generate_profile()
        test_profile= {'name': 'Bernie Sanders', 'occID': '', 'occupations': ['Politician'], 'info': {}}
        self.assertTrue(self.celebrity.profile==test_profile)