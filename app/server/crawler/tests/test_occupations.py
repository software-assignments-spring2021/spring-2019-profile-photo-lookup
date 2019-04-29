from django.test import TestCase
from ..occupation import *

class OccupationsTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(OccupationsTest, self).__init__(*args, **kwargs)
    
    def testOccupation(self):
        occID, occupations= find_occupations("Barack Obama")
        self.assertTrue(occID== "politician")
        self.assertTrue(occupations== ["Politician", "44Th President Of The United States"])
        occID, occupations= find_occupations("Bruno Mars")
        self.assertTrue(occID== "musician")
        self.assertTrue(occupations== ["Singer", "Songwriter", "Producer"])
        occID, occupations= find_occupations("Tom Cruise")
        self.assertTrue(occID== "actor")
        self.assertTrue(occupations== ["Actor", "Producer"])
        occID, occupations= find_occupations("David Beckham")
        self.assertTrue(occID== "athlete")
        print(occupations)
        self.assertTrue(occupations==["Professional Football Player"])