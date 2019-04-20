import React, { Component } from 'react';
import './home.css';
import { FaStar } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';

class Home extends Component {

    render() {
        return (
            <div className = "container-fluid homepage">
                <div className="jumbotron header">
                    <div className="rise">
                        <h1 className="display-4">R.I.S.E</h1>
                    </div>
                    <p className="lead">Welcome to the Reverse Image Search Engine!</p>
                    <p className="lead">
                        <a className="btn btn-lg btn-header" href="/about" role="button">Learn more</a>
                    </p>
                    <section className="section">
                        <div className="modal-left"><a className="modal-bubble modal-bubble-left" href="/celebrityupload"><FaStar />celebrity</a></div>
                        <div className="modal-right"><a className="modal-bubble modal-bubble-right" href="/student"><FaBookReader />student</a></div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
