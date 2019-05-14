from django.test import TestCase
from ..actor import Actor


class ActorTest(TestCase):
    def test_actor_info(self):
        actor = Actor("Tom Cruise", ["Actor"])
        bio = "Thomas Cruise is an American actor and producer. Primarily known for his work in action films, he has also received several accolades for more dramatic work, including three Golden Globe Awards and nominations for three Academy Awards. Cruise is one of the best-paid actors in the world, and his films have earned over $3.9 billion in North America; he is one of the highest-grossing actors of all time."
        titles = ["Top Gun", "The Last Samurai", "Jerry Maguire", "Minority Report"]
        upcoming = ["Luna Park",
                    "Mission: Impossible 8",
                    "Mission: Impossible 7",
                    "Live Die Repeat and Repeat",
                    "Top Gun: Maverick",
                    "Ray"]
        self.assertEqual(actor.info['bio'], bio)
        self.assertEqual(actor.info['known titles'], titles)
        self.assertEqual(actor.info['upcoming titles'], upcoming)