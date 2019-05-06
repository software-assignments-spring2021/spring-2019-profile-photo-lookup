import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'

import './home.css';
import NYU from  './nyu.jpg'
import CELEB from './celeb.jpg'
import FACE from './face.jpg'


class Home extends Component {

    render() {
        return (
            <div className = "container-fluid homepage">
                <Carousel fade={true}>
                    <Carousel.Item className="carousel">
                        <img
                            src={FACE}
                            alt="First slide"
                        />
                        <Carousel.Caption className="caption">
                            <h3>R.I.S.E</h3>
                            <p>Welcome to Reverse Image Search Engine</p>
                            <Link to="/about" className="btn"> Learn More </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            src={CELEB}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="caption">
                            <h3>Celebrity Recognition</h3>
                            <p>Keep up on pop culture.</p>
                            <Link to="/celebrity" className="btn"> Try Me </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            src={NYU}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="caption">
                            <h3>Student Recognition</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            <Link to="/student" className="btn"> Try Me </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <section className="section">
                    <div className="modal-left"><a className="modal-bubble modal-bubble-left" href="/celebrity"><FaStar />celebrity</a></div>
                    <div className="modal-right"><a className="modal-bubble modal-bubble-right" href="/student"><FaBookReader />student</a></div>
                </section>
            </div>
        );
    }
}

export default Home;
