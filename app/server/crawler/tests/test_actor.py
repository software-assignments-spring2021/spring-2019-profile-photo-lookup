from django.test import TestCase
from ..actor import Actor

class ActorTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(ActorTest, self).__init__(*args, **kwargs)
        self.name = "Tom Cruise"
        self.occupations = ["Actor"]

        self.actor = Actor(self.name, self.occupations)


    def test_bio(self):
        bio = "Thomas Cruise (born Thomas Cruise Mapother IV, July 3, 1962) is an American actor and producer. Primarily known for his work in action films, he has also received several accolades for more dramatic work, including three Golden Globe Awards and nominations for three Academy Awards."
        self.assertEqual(str(self.actor.info['bio']), bio)

    def test_awards(self):
        awards = "Nominated for 3 Oscars."
        self.assertEqual(self.actor.info['awards'], awards)

    def test_titles(self):
        titles = ["Top Gun", "The Last Samurai", "Jerry Maguire", "Minority Report"]
        self.assertEqual(self.actor.info['titles'], titles)


    def test_interview(self):
        interview = "https://www.imdb.com/video/imdb/vi2127215385?playlistId=nm0000129"
        self.assertEqual(self.actor.info['interview'], interview)

    def test_upcoming(self):
        upcoming = ["Luna Park",
                "Mission: Impossible 8",
                "Mission: Impossible 7",
                "Live Die Repeat and Repeat",
                "Top Gun: Maverick"]
        self.assertEqual(self.actor.info['upcoming'], upcoming)
