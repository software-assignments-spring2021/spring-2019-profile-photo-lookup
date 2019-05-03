from django.test import TestCase
from ..occupation import find_occupations

class OccupationsTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(OccupationsTest, self).__init__(*args, **kwargs)

    def testOccupation(self):
        occID, occupations= find_occupations("Barack Obama")
        self.assertEqual(occID, "politician")
        self.assertEqual(occupations, ["Politician"])

        occID, occupations= find_occupations("Bruno Mars")
        self.assertEqual(occID, "musician")
        self.assertEqual(occupations, ["Singer", "Songwriter", "Producer"])

        occID, occupations= find_occupations("Tom Cruise")
        self.assertEqual(occID, "actor")
        self.assertEqual(occupations, ["Actor", "Producer"])

        occID, occupations= find_occupations("David Beckham")
        self.assertEqual(occID, "athlete")
        self.assertEqual(occupations, ["Professional Football Player"])

        occID, occupations= find_occupations("Chris Evans")
        self.assertEqual(occID, "actor")
        self.assertEqual(occupations, ["Actor"])

        occID, occupations= find_occupations("Usher")
        self.assertEqual(occID, "musician")
        self.assertEqual(occupations, ["Singer", "Songwriter"])
