import React, { Component } from 'react';
import './celebrityUpload.css';
import UploadDropzone from './uploadDropzone.js';

class CelebrityUpload extends Component {

    render() {
        return (
            <div className = "App container-fluid background">
                <h1>Upload a photo of your favorite celebrity!</h1>
                <div><UploadDropzone /></div>
            </div>
        );
    }
}

export default CelebrityUpload;
