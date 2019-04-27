from django.test import TestCase
from ..actor import Actor

class ActorTest(TestCase):
    def __init__(self, *args, **kwargs):
        
        self.name = "Tom Cruise"
        self.occupations = ["Actor"]
        self.actor = Actor(self.name, self.occupations)

    
    def test_info(self):
        info = {
            "name": "Tom Cruise",
            "bio": "In 1976, if you had told fourteen year-old Franciscan seminary student Thomas Cruise Mapother IV that one day in the not too distant future he would be Tom Cruise, one of the top 100 movie stars of all time, he would have probably grinned and told you that his ambition was to join the priesthood. Nonetheless, this sensitive, deeply religious youngster who was born in 1962 in Syracuse, New York, was destined to become one of the highest paid and most sought after actors in screen history.Tom is the only son (among four children) of nomadic parents, Mary Lee (Pfeiffer), a special education teacher, and Thomas Cruise Mapother III, an electrical engineer. His parents were both from Louisville, Kentucky, and he has German, Irish, and English ancestry. Young Tom spent his boyhood always on the move, and by the time he was 14 he had attended 15 different schools in the U.S. and Canada. He finally settled in Glen Ridge, New Jersey, with his mother and her new husband. While in high school, Tom wanted to become a Priest but pretty soon he developed an interest in acting and abandoned his plans of becoming a priest, dropped out of school, and at age 18 headed for New York and a possible acting career. The next 15 years of his life are the stuff of legends. He made his film debut with a small part in Endless Love (1981) and from the outset exhibited an undeniable box office appeal to both male and female audiences.With handsome movie star looks and a charismatic smile, within 5 years Tom Cruise was starring in some of the top grossing films of the 1980s including Top Gun (1986); The Color of Money (1986), Rain Man (1988) and Born on the Fourth of July (1989). By the 1990s he was one of the highest paid actors in the world earning an average 15 million dollars a picture in such blockbuster hits as Interview with the Vampire: The Vampire Chronicles (1994), Mission: Impossible (1996) and Jerry Maguire (1996) for which he received an Academy Award Nomination for best actor. Tom Cruise's biggest franchise , Mission Impossible has also earned a total of 3 billion dollars worldwide. Tom cruise has also shown lots of interest in producing with his biggest producer credits being the Mission impossible franchise.In 1990 he renounced his devout Catholic beliefs and embraced The Church Of Scientology claiming that Scientology teachings had cured him of the dyslexia that had plagued him all of his life. A kind and thoughtful man well known for his compassion and generosity, Tom Cruise is one of the best liked members of the movie community. He was married to actress Nicole Kidman until 2001. Thomas Cruise Mapother IV has indeed come a long way from the lonely wanderings of his youth to become one of the biggest movie stars ever.",
            "awards": "Nominated for 3 Oscars.",
            "titles":[
                "Top Gun",
                "The Last Samurai",
                "Jerry Maguire",
                "Minority Report"
            ],
            "upcoming": ["Luna Park",
                "Mission: Impossible 8",
                "Mission: Impossible 7",
                "Live Die Repeat and Repeat",
                "Top Gun: Maverick", 
            ],
            "interview": "https://www.imdb.com/video/imdb/vi2127215385?playlistId=nm0000129"
        }
        self.assertEqual(self.actor.info, info)
