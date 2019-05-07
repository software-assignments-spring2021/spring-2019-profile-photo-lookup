import React, { Component } from 'react';
import './celebrityUpload.css';
import UploadDropzone from './uploadDropzone.js';

class CelebrityUpload extends Component {

    render() {
        return (
            <div className = "App container-fluid upload-page">
                <header className="celeb-upload-header">
                    <h3>Celebrity</h3>
                    <p> Upload a photo of your favorite celebrity! </p>
                </header>
                <div><UploadDropzone /></div>
            </div>
        );
    }
}

export default CelebrityUpload;
