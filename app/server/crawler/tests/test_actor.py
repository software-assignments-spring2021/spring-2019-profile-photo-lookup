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
                "Top Gun: Maverick"
            ]
        self.assertEqual(self.actor.info['upcoming'], upcoming)
"""
    def test_titles_overview(self):
        overview = ["For Lieutenant Pete 'Maverick' Mitchell and his friend and co-pilot Nick 'Goose' Bradshaw, being accepted into an elite training school for fighter pilots is a dream come true. But a tragedy, as well as personal demons, will threaten Pete's dreams of becoming an ace pilot.",
                "Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them. Pressed to destroy the samurai's way of life in the name of modernization and open trade, Algren decides to become an ultimate warrior himself and to fight for their right to exist.",
                "Jerry Maguire used to be a typical sports agent: willing to do just about anything he could to get the biggest possible contracts for his clients, plus a nice commission for himself. Then, one day, he suddenly has second thoughts about what he's really doing. When he voices these doubts, he ends up losing his job and all of his clients, save Rod Tidwell, an egomaniacal football player.",
                "John Anderton is a top 'Precrime' cop in the late-21st century, when technology can predict crimes before they're committed. But Anderton becomes the quarry when another investigator targets him for a murder charge."]
        self.assertEqual(str(self.actor.info['titles_overview']), str(overview))



    def test_upcoming_overview(self):
        overview = ["A group of renegade space workers venture to the moon to steal an energy source.",
                "No description provided",
                "Plot unknown. The follow-up to 2014s 'Edge of Tomorrow'.",
                "Set in the world of drone technology and fifth generation fighters, this sequel will explore the end of the era of dogfighting."]
                #"Set in the world of drone technology and fifth generation fighters, this sequel will explore the end of the era of dogfighting."]
        self.assertEqual(str(self.actor.info['upcoming_overview']), str(overview))
"""