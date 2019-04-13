import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div className = "container-fluid">
                <div className="jumbotron">
                    <div className="rise">
                        <h1 className="display-4">R.I.S.E</h1>
                    </div>
                    <p className="lead">Welcome to the Reverse Image Search Engine!</p>
                    <hr className="my-4"></hr>
                    <p className="lead">Click to learn more about this site.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
