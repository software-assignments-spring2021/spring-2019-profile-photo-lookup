from django.test import TestCase
from ..politician import Politician
from ..politicianstrategy import SenateRepStrategy

class PoliticianTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(PoliticianTest, self).__init__(*args, **kwargs)
        self.name = "Bernie Sanders"
        self.occupations = ["Politician"]
        self.politician = Politician(self.name, self.occupations)

    def test_memberID(self):
        test_memberID= "S000033"
        self.assertEqual(self.politician.member_ID, test_memberID)

    def test_name(self):
        self.assertEqual(self.politician.name, "Bernard Sanders")

    def test_strategy(self):
        test_strategy= SenateRepStrategy()
        self.assertEqual(str(self.politician.strategy), str(test_strategy))

    def test_occID(self):
        test_occID= "politician"
        self.assertEqual(self.politician.occID, test_occID)

    def test_occupations(self):
        self.assertEqual(self.politician.occupations, self.occupations)

    def test_info(self):
        self.assertEqual(self.politician.info['party'], "Other")
        self.assertEqual(self.politician.info['title'], "U.S. Senate, Senator, 1st Class")
        self.assertEqual(self.politician.info['state'], "VT")
        self.assertEqual(self.politician.info['service_span'], ["From 2019-01-03 to 2021-01-03"])
        self.assertEqual(self.politician.info['website'], "https://www.sanders.senate.gov")
        self.assertEqual(self.politician.info['twitter'], "@SenSanders")
        self.assertEqual(self.politician.info['facebook'], "senatorsanders")
        self.assertEqual(self.politician.info['address'], "332 Dirksen Senate Office Building")
        self.assertEqual(self.politician.info['phone'], "202-224-5141")
