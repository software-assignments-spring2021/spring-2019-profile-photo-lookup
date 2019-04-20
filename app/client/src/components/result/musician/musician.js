import React, { Component } from "react";
import "./musician.css";
import SpotifyPlaylist from './spotifyplaylist.js';

class Musician extends Component {

    render() {
        let celeb = this.props.celeb;
        return (
            <div className="musician-section">
                <section className="info">
                    <div className="info-header"><div className="info-bubble genre-bubble">Genre</div></div>
                    <div className="info-content">{celeb.info.genres}</div>
                </section>
                <section className="info">
                    <div className="info-header"><div className="info-bubble release-bubble"><div className="release-bubble-latest">Latest</div><div>Releases</div></div></div>
                    <div className="info-content">{celeb.info.release}</div>
                </section>
                <section className="info">
                    <div className="info-header"><div className="info-bubble awards-bubble">Awards</div></div>
                    <div className="info-content">{celeb.info.awards}</div>
                </section>
                <SpotifyPlaylist celeb={celeb}/>
            </div>
        );
    }
}

export default Musician;
