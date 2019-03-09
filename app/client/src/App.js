import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import UploadDropzone from './components/uploadDropzone.js';
import UploadResult from './components/uploadResult.js';

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <div className="App container">
                <h1>Welcome to RIS!</h1>
                <div><UploadDropzone /></div>
                <div>{this.props.names ? <UploadResult names={this.props.names}/> : null}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.analysis.names
    };
}

export default connect(mapStateToProps, null)(App);
