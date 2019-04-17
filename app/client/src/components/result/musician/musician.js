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
        return (
            <div>
                <h1>This is a musician</h1>
                <SpotifyPlaylist url={this.state.url}/>
            </div>
        );
    }
}

export default Musician;
