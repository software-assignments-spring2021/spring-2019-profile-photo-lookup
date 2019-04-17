import React, { Component } from 'react';
import './resultPage.css';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import SpotifyPlaylist from './musician/spotifyplaylist.js';
import Celeb from './celeb.js';

class ResultPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            celebs: [
                {
                    name: "Lady Gaga",
                    occ_id: "musician",
                    occupation: [
                        "Singer",
                        "Songwriter",
                        "Actress",
                        "Record Producer"],
                    info: {
                            playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    }
                },
                {
                    name: "David Bowie",
                    occ_id: "politician",
                    occupation: [
                        "Singer",
                        "Songwriter",
                        "Rock God"],
                    info: {
                            playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    }
                },
                {
                    name: "Axl Rose",
                    occ_id: "actor",
                    occupation: [
                        "Singer",
                        "Songwriter",
                        "Rock God"],
                    info: {
                            playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    }
                }
            ]
        };
    }

    renderAccordionContent() {
        return this.state.celebs.map((celeb, i) => {
            return (
                <div className="card" key={i}>
                    <button type="button" className="btn text-white accordion-card" data-toggle="collapse" data-target={`#blah${i}`}>{celeb.name}</button>
                    <div id={`blah${i}`} className={i === 0 ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {/*}{celeb.occupation.map((occ, i) => {
                                return(
                                    <div key={i}>
                                        {occ}
                                    </div>
                                )
                            })}
                            <SpotifyPlaylist />*/}
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
        names: state.analysis.names,
        info: state.analysis.info
    };
}

export default connect(mapStateToProps, null)(ResultPage);
