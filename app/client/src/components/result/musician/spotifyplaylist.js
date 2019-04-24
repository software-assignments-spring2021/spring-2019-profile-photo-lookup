import React, { Component } from "react";
import "./spotifyplaylist.css";

class SpotifyPlaylist extends Component {

    render() {
        return (
            <div id="spotify">
                <iframe
                    title="Spotify playlist"
                    src={this.props.celeb.info['top tracks']}

                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    id="spotify-iframe"
                />
            </div>
        );
    }
}

export default SpotifyPlaylist;
