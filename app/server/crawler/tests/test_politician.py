from django.test import TestCase
from ..politician import Politician


class PoliticianTest(TestCase):

    def test_senator(self):
        politician1 = Politician("Bernie Sanders", ["Politician"])
        self.assertEqual(politician1.occID, "politician")
        self.assertEqual(politician1.full_name, "Bernard Sanders")
        self.assertEqual(str(politician1.strategy), "Senate")
        self.assertEqual(politician1.info['party'], "Other")
        self.assertEqual(politician1.info['title'], "U.S Senator")
        self.assertEqual(politician1.info['state'], "VT")
        self.assertEqual(politician1.info['website'], "https://www.sanders.senate.gov")
        self.assertEqual(politician1.info['twitter'], "SenSanders")
        self.assertEqual(politician1.info['facebook'], "senatorsanders")
        self.assertEqual(politician1.info['address'], "332%20Dirksen%20Building")
        self.assertEqual(politician1.info['phone'], "202-224-5141")

    def test_president(self):
        politician2 = Politician("Barack Obama", ["Politician"])        
        self.assertEqual(politician2.occID, "politician")
        self.assertEqual(str(politician2.strategy), "Executive")
        self.assertEqual(politician2.info['party'], "Democrat")
        self.assertEqual(politician2.info['title'], "Former President of the United States")
        self.assertEqual(len(politician2.info['terms']), 2)
        self.assertEqual(politician2.info['birthday'], "1961-08-04")
