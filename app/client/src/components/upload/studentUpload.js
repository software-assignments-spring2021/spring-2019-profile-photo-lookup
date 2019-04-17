import React, { Component } from 'react';
import './studentUpload.css';
import UploadDropzone from './uploadDropzone.js';

class StudentUpload extends Component {

    render() {
        return (
            <div className = "App container-fluid upload-page">
                <h1 className="upload-header">Upload a photo of your friend!</h1>
                <div><UploadDropzone /></div>
            </div>
        );
    }
}

export default StudentUpload;
