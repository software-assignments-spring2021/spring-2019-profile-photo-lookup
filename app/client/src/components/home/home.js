import React, { Component } from 'react';
import './home.css';
import { connect } from 'react-redux';
import UploadDropzone from './uploadDropzone.js';

class Home extends Component {

    render() {
        return (
            <div className="App container">
                <div className="logo-text">
                    <img src={require('./logo/logo-name.png')} alt='logo' />
                </div>
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
