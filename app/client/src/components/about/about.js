import React, { Component } from 'react';
import './about.css';


class About extends Component {

    render() {
        return (
            <div className="container-fluid about-page">
                <h1 className="about-header">About</h1>
                <h2 className="about-body">
                    <p>This project aims to create a website that provides a social-media-oriented facial recognition service of NYU students and public figures using facial detection and recognition algorithms. Given an user-input image, the system applies machine learning algorithms to detect and identify human faces that are present. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, which could include name, occupation, social media profiles, and/or Wikipedia/IMDB pages(if available).</p>
                    <p>Visit our <a className="about-link" href="https://github.com/nyu-software-engineering/profile-photo-lookup">GitHub page</a> to learn more.</p>
                </h2>

            </div>
        );
    }
}


export default About;
