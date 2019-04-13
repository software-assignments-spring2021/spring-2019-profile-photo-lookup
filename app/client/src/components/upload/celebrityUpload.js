import React, { Component } from 'react';
import './celebrityUpload.css';
import UploadDropzone from './uploadDropzone.js';

class CelebrityUpload extends Component {

    render() {
        return (
            <div className = "App container-fluid">
                <div className="my-5" />
                <div><UploadDropzone /></div>
            </div>
        );
    }
}

export default CelebrityUpload;
