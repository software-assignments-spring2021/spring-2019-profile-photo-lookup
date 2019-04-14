import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div className = "container-fluid homepage">
                <div className="jumbotron header">
                    <div className="rise">
                        <h1 className="display-4">R.I.S.E</h1>
                    </div>
                    <p className="lead">Welcome to the Reverse Image Search Engine!</p>
                    <hr className="my-4"></hr>
                    <p className="lead">Click to learn more about this site.</p>
                    <p className="lead">
                        <a className="btn btn-lg btn-header" href="/about" role="button">Learn more</a>
                    </p>
                </div>
                <section className="section">
                    <div className="modal-left"><a className="modal-link" href="/celebrityupload">CELEBRITY</a></div>
                    <div className="modal-right"><a className="modal-link" href="/studentupload">STUDENT</a></div>
                </section>
            </div>
        );
    }
}

export default Home;
