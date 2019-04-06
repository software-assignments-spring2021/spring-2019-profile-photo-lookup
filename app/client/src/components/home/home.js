import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import UploadDropzone from './uploadDropzone.js';
class Home extends Component {

    render() {
        return (
            <div className="App container">
                <h1>Welcome to RIS!</h1>

                <img src={require('./logo-designs/logo-image.png')} alt='logo' />
                <button type="button" className="btn btn-primary btn-lg">Large button</button>


                <div><UploadDropzone /></div>
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
