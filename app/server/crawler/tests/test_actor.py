from django.test import TestCase
from ..actor import Actor

class ActorTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(ActorTest, self).__init__(*args, **kwargs)
        self.name = "Tom Cruise"
        self.occupations = ["Actor"]
        self.actor = Actor(self.name, self.occupations)

    def test_bio(self):
        bio = "Thomas Cruise is an American actor and producer. Primarily known for his work in action films, he has also received several accolades for more dramatic work, including three Golden Globe Awards and nominations for three Academy Awards. Cruise is one of the best-paid actors in the world, and his films have earned over $3.9 billion in North America; he is one of the highest-grossing actors of all time."
        self.assertEqual(self.actor.info['bio'], bio)

    def test_titles(self):
        titles = ["Top Gun", "The Last Samurai", "Jerry Maguire", "Minority Report"]
        self.assertEqual(self.actor.info['titles'], titles)

    def test_upcoming(self):
        upcoming = ["Luna Park",
                    "Mission: Impossible 8",
                    "Mission: Impossible 7",
                    "Live Die Repeat and Repeat",
                    "Top Gun: Maverick",
                    "Ray"]
        self.assertEqual(self.actor.info['upcoming'], upcoming)
