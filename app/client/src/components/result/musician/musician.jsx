import React, { Component } from "react";
import "./musician.css";

class Musician extends Component {
  state = {
    url: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
  };
  render() {
    return (
      <body id="spotify">
        <iframe
          src={this.state.url}
          width="500"
          height="580"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </body>
    );
  }
}

export default Musician;
