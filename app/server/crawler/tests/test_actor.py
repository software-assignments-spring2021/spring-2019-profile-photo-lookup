from django.test import TestCase
from ..actor import Actor

class ActorTest(TestCase):
    def __init__(self, *args, **kwargs):
        super(ActorTest, self).__init__(*args, **kwargs)
        self.name = "Tom Cruise"
        self.occupations = ["Actor"]
    
        self.actor = Actor(self.name, self.occupations)
    

    def test_bio(self):
        bio = "In 1976, if you had told fourteen year-old Franciscan seminary student Thomas Cruise Mapother IV that one day in the not too distant future he would be Tom Cruise, one of the top 100 movie stars of all time, he would have probably grinned and told you that his ambition was to join the priesthood. Nonetheless, this sensitive, deeply religious youngster who was born in 1962 in Syracuse, New York, was destined to become one of the highest paid and most sought after actors in screen history.Tom is the only son (among four children) of nomadic parents, Mary Lee (Pfeiffer), a special education teacher, and Thomas Cruise Mapother III, an electrical engineer. His parents were both from Louisville, Kentucky, and he has German, Irish, and English ancestry. Young Tom spent his boyhood always on the move, and by the time he was 14 he had attended 15 different schools in the U.S. and Canada. He finally settled in Glen Ridge, New Jersey, with his mother and her new husband. While in high school, Tom wanted to become a Priest but pretty soon he developed an interest in acting and abandoned his plans of becoming a priest, dropped out of school, and at age 18 headed for New York and a possible acting career. The next 15 years of his life are the stuff of legends. He made his film debut with a small part in Endless Love (1981) and from the outset exhibited an undeniable box office appeal to both male and female audiences.With handsome movie star looks and a charismatic smile, within 5 years Tom Cruise was starring in some of the top grossing films of the 1980s including Top Gun (1986); The Color of Money (1986), Rain Man (1988) and Born on the Fourth of July (1989). By the 1990s he was one of the highest paid actors in the world earning an average 15 million dollars a picture in such blockbuster hits as Interview with the Vampire: The Vampire Chronicles (1994), Mission: Impossible (1996) and Jerry Maguire (1996) for which he received an Academy Award Nomination for best actor. Tom Cruise's biggest franchise , Mission Impossible has also earned a total of 3 billion dollars worldwide. Tom cruise has also shown lots of interest in producing with his biggest producer credits being the Mission impossible franchise.In 1990 he renounced his devout Catholic beliefs and embraced The Church Of Scientology claiming that Scientology teachings had cured him of the dyslexia that had plagued him all of his life. A kind and thoughtful man well known for his compassion and generosity, Tom Cruise is one of the best liked members of the movie community. He was married to actress Nicole Kidman until 2001. Thomas Cruise Mapother IV has indeed come a long way from the lonely wanderings of his youth to become one of the biggest movie stars ever."
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
        self.assertEqual(str(self.actor.info['upcoming_overview']), str(overview))