import React, { Component } from 'react';
import './resultPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ResultPage extends Component {

    renderNames() {
        var celebs = [
            {
                name: "Lady Gaga",
                occ_id: "musician",
                occupation: [
                    "Singer",
                    "Songwriter",
                    "Actress",
                    "Record Producer"],
                info: {
                        playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                }
            },
            {
                name: "David Bowie",
                occ_id: "musician",
                occupation: [
                    "Singer",
                    "Songwriter",
                    "Rock God"],
                info: {
                        playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                }
            },
        ];
        return celebs.map((celeb, i) => {
            return (
                <h1 key={i}><Link
                    to={{
                        pathname: `results/${celeb.name}`,
                        celeb: celeb
                    }}
                >{celeb.name}</Link></h1>
            );
        });
    }

    render() {
        return (
            <div id="result-page">
                <h2>Results</h2>
                {this.renderNames()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.analysis.names,
        info: state.analysis.info
    };
}

export default connect(mapStateToProps, null)(ResultPage);
