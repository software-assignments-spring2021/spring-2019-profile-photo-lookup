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
            <SpotifyPlaylist url={this.state.url}/>
        );
    }
}

export default Musician;
