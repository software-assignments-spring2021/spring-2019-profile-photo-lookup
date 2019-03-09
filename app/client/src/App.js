import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import UploadDropzone from './components/uploadDropzone.js';

class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         names: []
    //     };
    // }

    render() {
        return (
            <div className="App">
                <UploadDropzone />
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
