from django.test import TestCase

from ..politician import Politician
from ..politicianstrategy import SenateRepStrategy

class PoliticianTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(PoliticianTest, self).__init__(*args, **kwargs)
        self.name = "Bernie Sanders"
        self.occupations = ["Politician"]
        self.politician = Politician(self.name, self.occupations)

    def test_name(self):
        self.assertEqual(self.politician.name, "Bernie Sanders")
        self.assertEqual(self.politician.full_name, "Bernard Sanders")

    def test_strategy(self):
        self.assertEqual(str(self.politician.strategy), "Senate")

    def test_occID(self):
        self.assertEqual(self.politician.occID, "politician")

    def test_occupations(self):
        self.assertEqual(self.politician.occupations, self.occupations)

    def test_info(self):
        self.assertEqual(self.politician.info['party'], "Other")
        self.assertEqual(self.politician.info['title'], "U.S Senator")
        self.assertEqual(self.politician.info['state'], "VT")
        self.assertEqual(self.politician.info['website'], "https://www.sanders.senate.gov")
        self.assertEqual(self.politician.info['twitter'], "SenSanders")
        self.assertEqual(self.politician.info['facebook'], "senatorsanders")
        self.assertEqual(self.politician.info['address'], "332%20Dirksen%20Building")
        self.assertEqual(self.politician.info['phone'], "202-224-5141")
