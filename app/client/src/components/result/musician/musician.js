import React, { Component } from "react";
import "./musician.css";
import SpotifyPlaylist from './spotifyplaylist.js';

class Musician extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
        };
    }

    render() {
        let celeb = this.props.celeb;
        return (
            <div className="musician-section">
                <section className="info">
                    <div className="info-header"><div className="info-bubble genre-bubble">Genre</div></div>
                    <div className="genre-content">{celeb.info.genre}</div>
                </section>
                <section className="info">
                    <div className="info-header"><div className="info-bubble release-bubble"><div className="release-bubble-latest">Latest</div><div>Releases</div></div></div>
                    <div className="genre-content">{celeb.info.release}</div>
                </section>
                <section className="info">
                    <div className="info-header"><div className="info-bubble awards-bubble">Awards</div></div>
                    <div className="genre-content">{celeb.info.awards}</div>
                </section>
                <SpotifyPlaylist url={celeb.info.spotify}/>
            </div>
        );
    }
}

export default Musician;
