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
                }
            ]
        }
    }

    renderAccordionContent() {
        return this.state.celebs.map((celeb, i) => {
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
