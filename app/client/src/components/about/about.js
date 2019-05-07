import React, { Component } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about-page">
                <div class="section-header">
                    <h3>About</h3>
                </div>
                <div className="about-body">
                    <p>
                        Our project aims to create a general purpose reverse image search engine. Specifically, we implemented two individual modules, one focuses on celebrity and another focuses for NYU students, by using Amazon’s facial recognition API and natural language processing libraries.
                        Given an user-uploaded image, the system detects and identifies human faces present in the image. If there is a potential match to a NYU student or a public figure, the system will return key information about the queried person, such as their name, picture, college, and facebook profile for an NYU student, or for celebrities, it returns information specific to the celebrities occupation. 
                        For example, if the celebrity is a musician, our system would return their music genres, a spotify playlist of their top songs, and their related artists. 
                        And currently, we have implemented four categories for celebrities and they are politician, actor, musician, athlete. We return different information for each category.
                    </p>
                    <p>Visit our <a className="about-link" href="https://github.com/nyu-software-engineering/profile-photo-lookup">GitHub page</a> to learn more.</p>
                </div>

                <div class="section-header">
                    <h3>Meet Our Team</h3>
                </div>
                <div className="card-deck" id="team">
                    <div className="card">
                        <div class="member">
                            <img src={require("./images/zach.jpg")} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                    <h4>Zach Li</h4>
                                    <span>NYU Class of 2020</span>
                                    <div class="social">
                                        <a href=""><FaFacebook className="icon"/></a>
                                        <a href=""><FaTwitter className="icon"/></a>
                                        <a href="https://github.com/zichenli6"><FaGithub className="icon"/></a>
                                        <a href="https://www.linkedin.com/in/zichenli/"><FaLinkedin className="icon"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Zach Li</h5>
                            <p className="card-text text-muted">CAS Class of 2020</p>
                            <p className="card-text">
                                Zach is a junior at NYU studing computer science with minors in economics and mathematics. 
                                He will intern with HERE technology this summer working on 3D mapping for autonomous vehicles.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div class="member">
                            <img src={require("./images/kayli.jpg")} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                    <h4>Kayli O'Keefe</h4>
                                    <span>NYU Class of 2019</span>
                                    <div class="social">
                                        <a href=""><FaFacebook className="icon"/></a>
                                        <a href=""><FaTwitter className="icon"/></a>
                                        <a href="https://github.com/kokeefe32"><FaGithub className="icon"/></a>
                                        <a href="https://www.linkedin.com/in/kayli-okeefe/"><FaLinkedin className="icon"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="name">Kayli O'Keefe</h5>
                            <p className="card-text text-muted">CAS Class of 2019</p>
                            <p className="card-text">
                                Kayli is getting ready to graduate with double majors in Psychology and Computer Science.
                                She plans to work as a software developer in Saint Louis upon graduation.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div class="member">
                            <img src={require("./images/amanda.jpg")} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                    <h4>Amanda Labuda</h4>
                                    <span>NYU Class of 2020</span>
                                    <div class="social">
                                        <a href=""><FaFacebook className="icon"/></a>
                                        <a href=""><FaTwitter className="icon"/></a>
                                        <a href="https://github.com/alabuda98"><FaGithub className="icon"/></a>
                                        <a href="https://www.linkedin.com/in/amanda-labuda-029070185/"><FaLinkedin className="icon"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="card-body">
                                <h5 className="card-title">Amanda Labuda</h5>
                                <p className="card-text text-muted">Tisch Class of 2020</p>
                                <p className="card-text">
                                    Amanda is in her second year of double majoring in Dance and Computer Science.
                                    She will study dance abroad in Berlin over the summer, and she hopes to combine her interests for technology and the arts once graduated.
                                </p>
                            </div>
                    </div>
                    <div className="card">
                        <div class="member">
                            <img src={require("./images/jinghwan.jpg")} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                    <h4>Jing Hwan</h4>
                                    <span>NYU Class of 2019</span>
                                    <div class="social">
                                        <a href=""><FaFacebook className="icon"/></a>
                                        <a href=""><FaTwitter className="icon"/></a>
                                        <a href="https://github.com/khoojh"><FaGithub className="icon"/></a>
                                        <a href="https://www.linkedin.com/in/jing-hwan-khoo-b22864105/"><FaLinkedin className="icon"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Khoo Jing Hwan</h5>
                            <p className="card-text text-muted">CAS Class of 2019</p>
                            <p className="card-text">
                                Jing Hwan is graduating in May 2019 with double majors in Philosophy and Computer Science and minor in Creative Writing.
                                He is going to graduate school for philosophy in Vancouver and hopes to one day become a philosopher.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div class="member">
                            <img src={require("./images/weijie.jpg")} class="img-fluid" alt=""></img>
                            <div class="member-info">
                                <div class="member-info-content">
                                    <h4>Weijie Chua</h4>
                                    <span>NYU Class of 2019</span>
                                    <div class="social">
                                        <a href=""><FaFacebook className="icon"/></a>
                                        <a href=""><FaTwitter className="icon"/></a>
                                        <a href="https://github.com/weijie9512"><FaGithub className="icon"/></a>
                                        <a href="https://www.linkedin.com/in/weijiechua9512/"><FaLinkedin className="icon"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Wei Jie Chua</h5>
                            <p className="card-text text-muted">CAS Class of 2019</p>
                            <p className="card-text">
                                Wei Jie is graduating double majors in Economics and Computer Science in spring 2019. 
                                He plans to work in public policy think tank in Malaysia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default About;
