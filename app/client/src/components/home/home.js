import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import UploadDropzone from './uploadDropzone.js';

class Home extends Component {

    render() {
        return (
<div className = "container-fluid">
<div className="jumbotron">
  <div className="rise">
  <h1 className="display-4">R.I.S.E</h1></div>
  <p className="lead">Welcome to the Reverse Image Search Engine!</p>
  <hr className="my-4"></hr>
  <p className="lead">Click to learn more about this site.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
  </p>
</div>

            <div className="App container">
                <div className="logo-text">
           { /**  <img src={require('./logo/logo-name.png')} alt='logo' />  */  }
             
                </div>
               

                <div><UploadDropzone /></div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.analysis.names
    };
}

export default connect(mapStateToProps, null)(Home);
