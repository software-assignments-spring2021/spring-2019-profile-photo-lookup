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
        test_info= {"name": "Bernard Sanders",
                    "party": "Other",
                    "title": "U.S. Senate, Senator, 1st Class",
                    "state": "VT",
                    "service_span": "From 2019-01-03 to 2021-01-03",
                    "website": "https://www.sanders.senate.gov",
                    "twitter": "@SenSanders",
                    "facebook": "senatorsanders",
                    "address": "332 Dirksen Senate Office Building",
                    "phone": "202-224-5141",
                    "committees": ["Committee on Energy and Natural Resources",
                                    "Committee on Environment and Public Works",
                                    "Committee on Veterans' Affairs",
                                    "Committee on the Budget",
                                    "Committee on Health, Education, Labor, and Pensions"],
                    "bio": "Bernard Sanders (born September 8, 1941) is an American politician who has served as the junior United States Senator from Vermont since 2007. The longest-serving Independent in congressional history, he was elected to the U.S."}
        self.assertEqual(self.politician.info, test_info)
