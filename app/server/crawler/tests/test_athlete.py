from django.test import TestCase
from ..athlete import Athlete

class AthleteTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(AthleteTest, self).__init__(*args, **kwargs)
        self.name = "David Beckham"
        self.occupations = "Professional Football Player"
        self.athlete = Athlete(self.name, self.occupations)

    def test_bio(self):
        bio = "David Robert Joseph Beckham, is an English retired professional footballer, the current president of Inter Miami CF, and co-owner of Salford City. He played for Manchester United, Preston North End, Real Madrid, Milan, LA Galaxy, Paris Saint-Germain and the England national team, for which he held the appearance record for an outfield player until 2016. He is the first English player to win league titles in four countries: England, Spain, the United States and France. He retired in May 2013 after a 20-year career, during which he won 19 major trophies."
        self.assertEqual(self.athlete.info['bio'], bio)


    def test_image(self):
        image_link = "https://gmsrp.cachefly.net/images/18/07/18/b651a4a7c95c48232fd1bda5e8b889da/960.jpg"
        self.assertEqual(self.athlete.info['image'], image_link)

    '''
    def test_highlights(self):
        highlights = "dQw4w9WgXcQ"
        self.assertEqual(self.athlete.info['highlights'], highlights)
    '''
    
    def test_twitter(self):
        twitter = ""
        self.assertEqual(self.athlete.info['twitter'], twitter)

    def test_insta(self):
        insta = "davidbeckham"
        self.assertEqual(self.athlete.info['insta'], insta)
