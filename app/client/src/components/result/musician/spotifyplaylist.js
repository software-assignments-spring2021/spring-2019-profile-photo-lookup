import React, { Component } from "react";
import "./spotifyplaylist.css";

class SpotifyPlaylist extends Component {

    render() {
        return (
            <div id="spotify">
                <iframe
                    title="Spotify playlist"
                    src={this.props.url}
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
