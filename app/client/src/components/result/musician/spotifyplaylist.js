import React, { Component } from "react";
import "./spotifyplaylist.css";

class SpotifyPlaylist extends Component {

    render() {
        return (
            <div id="spotify">
                <iframe
                    title="Spotify playlist"
                    src={this.props.celeb.info['top tracks']}
                    width="500"
                    height="580"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                />
            </div>
        );
    }
}

export default SpotifyPlaylist;
