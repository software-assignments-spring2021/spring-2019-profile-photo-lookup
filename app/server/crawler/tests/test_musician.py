from django.test import TestCase
from ..musician import Musician

class MusicianTest(TestCase):
    def test_musician_info(self):
        musician = Musician("Lady Gaga", ["Singer", "Songwriter", "Actress"])
        self.assertEqual(["dance pop", "pop"], musician.info["genres"])         
        self.assertEqual("https://open.spotify.com/embed/artist/1HY2Jd0NmPuamShAr6KMms", musician.info["top tracks"])
        self.assertEqual("https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXcZDD7cfEKhW", musician.info["related tracks"])
        self.assertEqual("ladygaga", musician.info["twitter"])
        self.assertEqual("ladygaga", musician.info["insta"])