import React, { Component } from "react";
import "./musician.css";

class Musician extends Component {
  // state = {
  //   url: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
  // };

    constructor(props) {
        super(props);
        this.state = {
            url: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
        };
    }

    render() {
        return (
            <div id="spotify">
                <iframe
                    title="Spotify playlist"
                    src={this.state.url}
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

export default Musician;
