import React, { Component } from 'react';
import './home.css';
import { FaStar } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <div className = "container-fluid homepage">
                <div className="jumbotron header">
                    <div className="rise">
                        <h1 className="display-4">R.I.S.E</h1>
                    </div>
                    <p className="lead">Welcome to the Reverse Image Search Engine!</p>
                    {/*}<hr className="my-4"></hr>
                    <p className="lead">Click to learn more about this site.</p>*/}
                    <p className="lead">
                        <a className="btn btn-lg btn-header" href="/about" role="button">Learn more</a>
                    </p>
                    <section className="section">
                        <div className="modal-left"><Link className="modal-bubble modal-bubble-left" to="/celebrityupload"><FaStar />celebrity</Link></div>
                        <div className="modal-right"><Link className="modal-bubble modal-bubble-right" to="/student"><FaBookReader />student</Link></div>
                    </section>
                </div>
                {/*}<section className="section">
                    <div className="modal-left"><a className="modal-link" href="/celebrityupload">CELEBRITY</a></div>
                    <div className="modal-right"><a className="modal-link" href="/student">STUDENT</a></div>
                </section>*/}

            </div>
        );
    }
}

export default Home;
