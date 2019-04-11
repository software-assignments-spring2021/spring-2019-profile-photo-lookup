import React, { Component } from 'react';
import './resultPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ResultPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            celebs: [
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
                {
                    name: "Axl Rose",
                    occ_id: "musician",
                    occupation: [
                        "Singer",
                        "Songwriter",
                        "Rock God"],
                    info: {
                            playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    }
                }
            ]
        };
    }

    renderNames() {
        return this.state.celebs.map((celeb, i) => {
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

    renderAccordionContent() {

        return this.state.celebs.map((celeb, i) => {
            return (
                <div className="card" key={i}>
                    <button type="button" className="btn text-white bg-dark btn-lg btn-block" data-toggle="collapse" data-target={`#blah${i}`}>{celeb.name}</button>
                    <div id={`blah${i}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            {celeb.occupation.map((occ, i) => {
                                return(
                                    <div key={i}>
                                        {occ}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div id="result-page" className="container">
                <h2>Results</h2>
                <div id="accordion">
                    {this.renderNames()}
                    {/*this.renderAccordionContent()*/}
                </div>
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
