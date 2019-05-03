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
    <img className="card-img-top" src="https://timedotcom.files.wordpress.com/2017/06/tom-cruise1.jpg?quality=85" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Zach Li</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>

      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://timedotcom.files.wordpress.com/2017/06/tom-cruise1.jpg?quality=85" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Kayli O'Keefe</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>

      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum..</p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://timedotcom.files.wordpress.com/2017/06/tom-cruise1.jpg?quality=85" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Amanda Labuda</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>
      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
    </div>
  </div>

  


  <div className="card">
    <img className="card-img-top" src="https://timedotcom.files.wordpress.com/2017/06/tom-cruise1.jpg?quality=85" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Jing Hwan</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>

      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum..</p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="https://timedotcom.files.wordpress.com/2017/06/tom-cruise1.jpg?quality=85" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Wei Jie Chua</h5>
      <p className="card-text text-muted">CAS Class of 3000</p>

      <p className="card-text">Phasellus eget enim eu lectus faucibus vestibulum.</p>
    </div>
  </div>
  
  </div>
  
                
            </div>
        );
    }
}


export default About;
