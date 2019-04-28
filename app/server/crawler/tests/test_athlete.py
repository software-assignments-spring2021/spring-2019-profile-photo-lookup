from django.test import TestCase
from ..athlete import pageInformation
from ..wiki import Wiki

class AthleteTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(AthleteTest, self).__init__(*args, **kwargs)
        self.name = "David Beckham"
        self.name_with_underscore = ["David_Beckham"]
        self.athlete = pageInformation(self.name)

    def test_name(self):
        self.assertEqual(self.athlete.name, "David Beckham")

    def test_name_with_underscore(self):
        self.assertEqual(self.athlete.name_with_underscore, "David_Beckham")

    def test_page(self):
        self.assertEqual(self.athlete.link, "https://en.wikipedia.org/wiki/David_Beckham")

    #def test_summary(self):
    #def test_personal_life(self):
    #def test_awards(self):
