from django.test import TestCase
from . import politician

class PoliticianTest(TestCase):
    def test_Politician(self):
        name= "Bernie Sanders"
        test_occ= ["Politician"]
        politician= Politician(test_name, test_occ)
        self.assertTrue(politician.is_valid())

    def test_memberID(self):
        name= "Bernie Sanders"
        test_occ= ["Politician"]
        politician= Politician(test_name, test_occ)
        test_memberID= "S000033"
        self.assertTrue(politcian.member_ID==test_memberID)
    
    def test_name(self):
        name= "Bernie Sanders"
        test_occ= ["Politician"]
        politician= Politician(test_name, test_occ)
        test_name= "Bernard Sanders"
        self.assertTrue(politcian.name==test_name)
    
    def test_strategy(self):
        name= "Bernie Sanders"
        test_occ= ["Politician"]
        politician= Politician(test_name, test_occ)
        test_strategy= SenateRepStrategy()
        self.assertTrue(politcian.strategy==test_strategy)
    
    def test_occID(self):
        name= "Bernie Sanders"
        test_occ= ["Politician"]
        politician= Politician(test_name, test_occ)
        test_occID= "politician"
        self.assertTrue(politcian.occID==test_occID)
    
    def test_occupations(self):
        name= "Bernie Sanders"
        test_occ= ["Politician"]
        politician= Politician(test_name, test_occ)
        self.assertTrue(politcian.occupations==test_occ)
    
    def test_info(self):
        name= "Bernie Sanders"
        test_occ= ["Politician"]
        politician= Politician(test_name, test_occ)
        test_info= {"name": "Bernard Sanders", "party": "Other","title": "U.S. Senate, Senator, 1st Class",
        "state": "VT","service_span": "From 2019-01-03 to 2021-01-03",
        "website": "https://www.sanders.senate.gov","twitter": "@SenSanders",
        "facebook": "senatorsanders","address": "332 Dirksen Senate Office Building",
        "phone": "202-224-5141","committees": ["Committee on Energy and Natural Resources",
        "Committee on Environment and Public Works","Committee on Veterans' Affairs",
        "Committee on the Budget","Committee on Health, Education, Labor, and Pensions"],
        "bio": "Bernard Sanders (born September 8, 1941) is an American politician who has served as the junior United States Senator from Vermont since 2007. The longest-serving Independent in congressional history, he was elected to the U.S."}
        self.assertTrue(politcian.info==test_info)
        