import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import InfoCard from './card.js'
import PoliticianCard from './politician/politician.js'
import ActorCard from './actor/actor.js'
import MusicianCard from './musician/musician.js'
import AthleteCard from './athlete/athlete.js'
import './resultPage.css';


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
                        "bio": "Stefani Joanne Angelina Germanotta, known professionally as Lady Gaga, is an American singer, songwriter and actress. She is known for her unconventionality, provocative work, and visual experimentation. She began performing as a teenager, singing at open mic nights and acting in school plays.",
                        "genres": [
                            "dance pop",
                            "pop"
                        ],
                        "release": "Poker Face",
                        "image": "https://timedotcom.files.wordpress.com/2019/04/lady-gaga-time-100-2019-057-1.jpg?quality=85&zoom=2",
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
                        "image": "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg",
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
                        "bio": "Thomas Cruise is an American actor and producer. Primarily known for his work in action films, he has also received several accolades for more dramatic work, including three Golden Globe Awards and nominations for three Academy Awards.",
                        "awards": "Nominated for 3 Oscars.",
                        "image": "https://timedotcom.files.wordpress.com/2017/06/tom-cruise1.jpg?quality=85",
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

    renderInfoCards() {
        var html = []
        let celebrities = this.state.celebs

        for (var i = 0; i < celebrities.length; i++){
            let celeb = celebrities[i]
            switch(celeb.occID) {
                case "actor":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <ActorCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                case "athlete":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <AthleteCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                case "musician":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <MusicianCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                case "politician":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <PoliticianCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                case "other":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <InfoCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                default:
                    break;
            }
        }
        return html
    }

    render() {
        return (
            <div id="main-page">
                <div id="bbox-image">
                    <img src={require("./celeb.jpg")} alt="bbox"/>
                </div>
                <div id="result-section">
                    <Grid container spacing={24} justify="flex-start" alignItems="flex-start">
                        {this.renderInfoCards()}
                    </Grid>
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
