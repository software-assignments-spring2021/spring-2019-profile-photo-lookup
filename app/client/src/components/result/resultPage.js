import React, { Component } from 'react';
import './resultPage.css';
import { connect } from 'react-redux';
import Celeb from './celeb.js';

class ResultPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            celebs: [
                {
                    "name": "Lady Gaga",
                    "occID": "musician",
                    "occupations": [
                        "Singer",
                        "Songwriter",
                        "Actress",
                        "Record Producer"
                    ],
                    "info": {
                        "genres": [
                            "dance pop",
                            "pop"
                        ],
                        "release": "Poker Face",
                        "image": {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ea76c82c05174105751f850c8a1db426dd03aa78",
                            "width": 640
                        },
                        "top tracks": "https://open.spotify.com/embed/artist/1HY2Jd0NmPuamShAr6KMms",
                        "related artists": [
                            {
                                "name": "Carly Rae Jepsen",
                                "id": "6sFIWsNpZYqfjUpaCgueju",
                                "image": {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ed2a8594692503329560e33509aa86b116904d02",
                                    "width": 640
                                },
                                "genres": [
                                    "canadian pop",
                                    "dance pop",
                                    "electropop",
                                    "indie poptimism",
                                    "pop",
                                    "post-teen pop",
                                    "uk pop"
                                ]
                            },
                            {
                                "name": "Kesha",
                                "id": "6LqNN22kT3074XbTVUrhzX",
                                "image": {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/89b1ac81bbe79cd957772a13092e871b549aff63",
                                    "width": 640
                                },
                                "genres": [
                                    "dance pop",
                                    "electropop",
                                    "pop",
                                    "pop rap",
                                    "post-teen pop"
                                ]
                            },
                            {
                                "name": "Miley Cyrus",
                                "id": "5YGY8feqx7naU7z4HrwZM6",
                                "image": {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/38107822778afc4eccd9f740704ac6e2cdb5f5fe",
                                    "width": 640
                                },
                                "genres": [
                                    "dance pop",
                                    "pop",
                                    "post-teen pop"
                                ]
                            }
                        ],
                        "related tracks": "https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DXcZDD7cfEKhW"
                    }
                },
                {
                    "name": "Barack Obama",
                    "occID": "politician",
                    "occupations": [
                        "Politician",
                        "44Th President Of The United States"
                    ],
                    "info": {
                        "name": "Barack Hussein Obama ",
                        "birthday": "1961-08-04",
                        "service_span": [
                            "From 2009-01-20 to 2013-01-20",
                            "From 2013-01-20 to 2017-01-20"
                        ],
                        "title": "President of the United States",
                        "party": "Democrat",
                        "bio": "Barack Hussein Obama II ( (listen); born August 4, 1961) is an American attorney and politician who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, he was the first African American to be elected to the presidency."
                    }
                },
                {
                    "name": "Tom Cruise",
                    "occID": "actor",
                    "occupations": [
                        "Actor"
                    ],
                    "info": {
                        "bio": "In 1976, if you had told fourteen year-old Franciscan seminary student Thomas Cruise Mapother IV that one day in the not too distant future he would be Tom Cruise, one of the top 100 movie stars of all time, he would have probably grinned and told you that his ambition was to join the priesthood. Nonetheless, this sensitive, deeply religious youngster who was born in 1962 in Syracuse, New York, was destined to become one of the highest paid and most sought after actors in screen history.Tom is the only son (among four children) of nomadic parents, Mary Lee (Pfeiffer), a special education teacher, and Thomas Cruise Mapother III, an electrical engineer. His parents were both from Louisville, Kentucky, and he has German, Irish, and English ancestry. Young Tom spent his boyhood always on the move, and by the time he was 14 he had attended 15 different schools in the U.S. and Canada. He finally settled in Glen Ridge, New Jersey, with his mother and her new husband. While in high school, Tom wanted to become a Priest but pretty soon he developed an interest in acting and abandoned his plans of becoming a priest, dropped out of school, and at age 18 headed for New York and a possible acting career. The next 15 years of his life are the stuff of legends. He made his film debut with a small part in Endless Love (1981) and from the outset exhibited an undeniable box office appeal to both male and female audiences.With handsome movie star looks and a charismatic smile, within 5 years Tom Cruise was starring in some of the top grossing films of the 1980s including Top Gun (1986); The Color of Money (1986), Rain Man (1988) and Born on the Fourth of July (1989). By the 1990s he was one of the highest paid actors in the world earning an average 15 million dollars a picture in such blockbuster hits as Interview with the Vampire: The Vampire Chronicles (1994), Mission: Impossible (1996) and Jerry Maguire (1996) for which he received an Academy Award Nomination for best actor. Tom Cruise's biggest franchise , Mission Impossible has also earned a total of 3 billion dollars worldwide. Tom cruise has also shown lots of interest in producing with his biggest producer credits being the Mission impossible franchise.In 1990 he renounced his devout Catholic beliefs and embraced The Church Of Scientology claiming that Scientology teachings had cured him of the dyslexia that had plagued him all of his life. A kind and thoughtful man well known for his compassion and generosity, Tom Cruise is one of the best liked members of the movie community. He was married to actress Nicole Kidman until 2001. Thomas Cruise Mapother IV has indeed come a long way from the lonely wanderings of his youth to become one of the biggest movie stars ever.",
                        "awards": "Nominated for 3 Oscars.",
                        "titles": [
                            "Top Gun",
                            "The Last Samurai",
                            "Jerry Maguire",
                            "Minority Report"
                        ],
                        "upcoming": [
                            "Luna Park",
                            "Mission: Impossible 8",
                            "Mission: Impossible 7",
                            "Live Die Repeat and Repeat",
                            "Top Gun: Maverick",
                            "Luna Park",
                            "Mission: Impossible 8",
                            "Mission: Impossible 7",
                            "Top Gun: Maverick"
                        ]
                    }
                }
            ]
        }
    }

    renderAccordionContent() {
        return this.props.celebs.map((celeb, i) => {
            return (
                <div className="card" key={i}>
                    <button type="button" className="btn text-white accordion-card" data-toggle="collapse" data-target={`#celeb${i}`}>{celeb.name}</button>
                    <div id={`celeb${i}`} className={i === 0 ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body celeb-card">
                            <Celeb celeb={celeb} />
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div id="result-page">
                <div id="accordion">
                    {this.renderAccordionContent()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        celebs: state.analysis.celebs
    };
}

export default connect(mapStateToProps, null)(ResultPage);
