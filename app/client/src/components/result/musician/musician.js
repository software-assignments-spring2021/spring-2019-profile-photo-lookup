import React, { Component } from "react";
import "./musician.css";
import SpotifyPlaylist from './spotifyplaylist.js';
import { connect } from 'react-redux';

class Musician extends Component {

    // constructor(props) {
    //     super(props);
        // this.state = {
        //     url: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
        // };
    // }

    render() {
        return (
            <SpotifyPlaylist url={this.props.info.url}/>
        );
    }


}

function mapStateToProps(state) {
    return {
        info: state.analysis.info
    };
}

export default connect(mapStateToProps, null)(Musician);
