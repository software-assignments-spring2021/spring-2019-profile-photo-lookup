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
                <div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={require("./images/zach.jpg")} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Zach Li</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>

      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
      <p><a href="#">Github</a> </p>
      <p><a href="#">LinkedIn</a> </p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={require("./images/kayli.jpg")} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Kayli O'Keefe</h5>
      <p className="card-text text-muted">CAS Class of 2019</p>

      <p className="card-text">Kayli is getting ready to graduate with double majors in Psychology and Computer Science. She plans to work as a software developer in Saint Louis upon graduation.</p>
      <p><a href="https://github.com/kokeefe32">Github</a> </p>
      <p><a href="https://www.linkedin.com/in/kayli-okeefe/">LinkedIn</a> </p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={require("./images/amanda.jpg")} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Amanda Labuda</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>
      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
      <p><a href="#">Github</a> </p>
      <p><a href="#">LinkedIn</a> </p>
    </div>
  </div>

  


  <div className="card">
    <img className="card-img-top" src={require("./images/khoojing.jpg")}alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Khoo Jing Hwan</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>

      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum..</p>
      <p><a href="#">Github</a> </p>
      <p><a href="#">LinkedIn</a> </p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={require("./images/weijie.jpg")} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Wei Jie Chua</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>

      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
      <p><a href="#">Github</a> </p>
      <p><a href="#">LinkedIn</a> </p>
    </div>
  </div>
  
  </div>
  
                
            </div>
        );
    }
}


export default About;
