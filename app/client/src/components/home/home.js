import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './home.css';
import NYU from  './img/nyu.jpg'
import CELEB from './img/celeb.jpg'
import FACE from './img/face.jpg'


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
                            <a href="/about" className="btn" role="button"> Learn More </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            src={CELEB}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="caption">
                            <h3>Celebrity Recognition</h3>
                            <p>Keep up with pop culture</p>
                            <a href="/celebrity" className="btn" role="button"> Try Me </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            src={NYU}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="caption">
                            <h3>Student Recognition</h3>
                            <p>Get connected to your fellow students</p>
                            <a href="/student" className="btn" role="button"> Try Me </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <section id="service">
                <div className="container">

                    <div className="section-header">
                        <h4>Our Services</h4>
                        <p>
                            Below is a list of the name and summary of all the services that we currently offer or plan to offer in the future.
                            Please feel free to contact us if you have any ideas or suggestions!
                            We would love to hear them!
                        </p>
                    </div>

                    <div className="row about-cols">
                    <div className="col-md-4">
                        <div className="about-col">
                        <div className="img">
                            <img src={CELEB} alt="" className="img-fluid"/>
                        </div>
                        <h2 className="title"><a href="/celebrity">Celebrity</a></h2>
                        <p>
                            Upload an image of celebrities and we will tell you who the people in the image are and any relevant information we can gather on that celebrity.
                            The information we return depends on the occupation of the celebrity, such as politician, musician, actor, and athlete. 
                        </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="about-col">
                        <div className="img">
                            <img src={NYU} alt="" className="img-fluid"/>
                        </div>
                        <h2 className="title"><a href="/student">Student</a></h2>
                        <p>
                            Upload an image of NYU students and we will tell you who the people in the image are and any relevant information we can gather on that person.
                            Currently, our database is limited to those in the College of Arts and Science at NYU graduing in 2020.
                        </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about-col">
                        <div className="img">
                            <img src={FACE} alt="" className="img-fluid"/>
                        </div>
                        <h2 className="title"><a href="/about">Custom</a></h2>
                        <p>
                            Want to add you own face to our database so when others use our app they can easily find you? 
                            Want to modify and add to the information that we currently have on in our databse?
                            It is coming soon as we are looking to implement those functions.
                        </p>
                        </div>
                    </div>

                    </div>
                </div>
                </section>

                <section id="application">
                <div className="container">

                    <header className="section-header">
                        <h4>Applications</h4>
                        <p>
                            Below is a list of the name and summary of all potential applications of our products and services.
                            Please feel free to contact us if you have any ideas or suggestions!
                            We would love to hear them!
                        </p>
                    </header>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 box">
                            <h4 className="title">Actor</h4>
                            <p className="description">Watching the Oscars but don't know who is giving the speech?</p>
                        </div>
                        <div className="col-lg-4 col-md-6 box">
                            <h4 className="title">Musician</h4>
                            <p className="description">Waching a live performance but don't know who the artist is?</p>
                        </div>
                        <div className="col-lg-4 col-md-6 box">
                            <h4 className="title">Athlete</h4>
                            <p className="description">Watching a football game at the bar but don't know who the quarterback is?</p>
                        </div>
                        <div className="col-lg-4 col-md-6 box">
                            <h4 className="title">Politician</h4>
                            <p className="description">Watching a political debate but want to learn about who the politican is?</p>
                        </div>
                        <div className="col-lg-4 col-md-6 box">
                            <h4 className="title">Student</h4>
                            <p className="description">Have a group photo of someone at a frat party and don't know who they are?</p>
                        </div>
                        <div className="col-lg-4 col-md-6 box">
                            <h4 className="title">Attendance</h4>
                            <p className="description">Want a fast and easy way to take attendance of your students?</p>
                        </div>
                    </div>

                </div>
                </section>
            </div>
        );
    }
}

export default Home;
