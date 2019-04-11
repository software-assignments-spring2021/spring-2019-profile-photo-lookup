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

    renderAccordion() {
        return (
            <div id="accordion">
              <div className="card">
                <button type="button" className="btn text-white bg-dark btn-lg btn-block" data-toggle="collapse" data-target="#collapseOne">Lady Gaga</button>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    Anim pariahetic synth nesciunt you probably hav of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <button type="button" className="btn text-white bg-dark btn-lg btn-block" data-toggle="collapse" data-target="#collapseTwo">Mick Jagger</button>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haf them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              <div className="card">
                <button type="button" className="btn text-white bg-dark btn-lg btn-block" data-toggle="collapse" data-target="#collapseThree">David Bowie</button>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havenrd of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
        );
    }

    render() {
        return (
            <div id="result-page" className="container">
                <h2>Results</h2>
                {this.renderNames()}
                {this.renderAccordion()}
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
