import React, { Component } from 'react';
import './celebrityUpload.css';
import UploadDropzone from './uploadDropzone.js';

class CelebrityUpload extends Component {

    render() {
        return (
            <div className = "App container-fluid upload-page">
                <h1 className="upload-header">Upload a photo of your favorite celebrity!</h1>
                <div><UploadDropzone /></div>
            </div>
        );
    }
}

export default CelebrityUpload;
