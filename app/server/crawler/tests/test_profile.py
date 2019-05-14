from django.test import TestCase
from ..profile import CelebrityFactory


class CelebrityFactoryTest(TestCase):
    def test_generateProfile(self):
        names = ["Donald Trump", "Brad Pitt", "Lebron James", "Avicii", "Melania Trump"]
        celebrityfactory = CelebrityFactory(names)
        profiles = celebrityfactory.construct_profiles()
        self.assertEqual(len(profiles), 5)
        
