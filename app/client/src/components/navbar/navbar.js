import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/" className="navbar-brand navbar-text">R.I.S.E.</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/home" className="nav-link navbar-text">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/celebrityupload" className="nav-link navbar-text">Celebrity</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/student" className="nav-link navbar-text">Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link navbar-text">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
