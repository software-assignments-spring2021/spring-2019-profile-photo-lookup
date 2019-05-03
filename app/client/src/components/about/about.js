import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about-page">
                <h1 className="about-header">About</h1>
                <h2 className="about-body">
                    <p>This project aims to create a website that provides a social-media-oriented facial recognition service of NYU students and public figures using facial detection and recognition algorithms. Given an user-input image, the system applies machine learning algorithms to detect and identify human faces that are present. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, which could include name, occupation, social media profiles, and/or Wikipedia/IMDB pages(if available).</p>
                    <p>Visit our <a className="about-link" href="https://github.com/nyu-software-engineering/profile-photo-lookup">GitHub page</a> to learn more.</p>
                </h2>
                <h1 className="team-header">Meet the Team</h1>
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={require("./images/zach.jpg")} alt="Zach Li"></img>
                        <div className="card-body">
                            <h5 className="card-title">Zach Li</h5>
                            <p className="card-text text-muted">CAS Class of 2020</p>
                            <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
                            <p><a href="https://github.com/zichenli6">Github</a> </p>
                            <p><a href="https://www.linkedin.com/in/zichenli/">LinkedIn</a> </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("./images/kayli.jpg")} alt="Kayli O'Keefe"></img>
                        <div className="card-body">
                            <h5 className="card-title">{"Kayli O'Keefe"}</h5>
                            <p className="card-text text-muted">CAS Class of 2019</p>
                            <p className="card-text">Kayli is getting ready to graduate with double majors in Psychology and Computer Science. She plans to work as a software developer in Saint Louis upon graduation.</p>
                            <p><a href="https://github.com/kokeefe32">Github</a> </p>
                            <p><a href="https://www.linkedin.com/in/kayli-okeefe/">LinkedIn</a> </p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("./images/amanda.jpg")} alt="Amanda Labuda"></img>
                            <div className="card-body">
                                <h5 className="card-title">Amanda Labuda</h5>
                                <p className="card-text text-muted">CAS Class of 2021</p>
                                <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
                                <p><a href="https://github.com/alabuda98">Github</a> </p>
                                <p><a href="https://www.linkedin.com/in/amanda-labuda-029070185/">LinkedIn</a> </p>
                            </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("./images/jinghwan.jpg")}alt="Jing Hwan Khoo"></img>
                            <div className="card-body">
                                <h5 className="card-title">Khoo Jing Hwan</h5>
                                <p className="card-text text-muted">CAS Class of 2019</p>
                                <p className="card-text">Jing Hwan is graduating in May 2019 with double majors in Philosophy and Computer Science and minor in Creative Writing. He is going to graduate school for philosophy in Vancouver and hopes to one day become a philosopher.</p>
                                <p><a href="https://github.com/khoojh">Github</a> </p>
                                <p><a href="https://www.linkedin.com/in/jing-hwan-khoo-b22864105/">LinkedIn</a> </p>
                            </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("./images/weijie.jpg")} alt="Wei Jie Chua"></img>
                        <div className="card-body">
                            <h5 className="card-title">Wei Jie Chua</h5>
                            <p className="card-text text-muted">CAS Class of 2019</p>
                            <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
                            <p><a href="https://github.com/weijie9512">Github</a> </p>
                            <p><a href="https://www.linkedin.com/in/weijiechua9512/">LinkedIn</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default About;
