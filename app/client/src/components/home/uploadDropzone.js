import React, { Component } from 'react';
import './uploadDropzone.css';
import DragAndDrop from './dragAndDrop.js'
import { connect } from 'react-redux';
import { uploadImage } from '../../redux/analysis/action.js';
import { FaFileUpload } from 'react-icons/fa';

class UploadDropzone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newImage: null
        };
    }

    handleDrop = (files) => {
        this.setState({ newImage: files[0] });
    }

    handleChangeImageUpload = (e) => {
        this.setState({ newImage: e.target.files[0] });
    };

    handleClickImageUpload = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (this.state.newImage) {
            formData.append("image", this.state.newImage);
        }
        this.props.uploadImage(formData);
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <DragAndDrop handleDrop={this.handleDrop}>
                            <div className="dropzone-content">
                                <div className="dropzone-content-text">
                                    {
                                        this.state.newImage ?
                                            <div>{this.state.newImage.name}</div>:
                                            <div>
                                                <div id="upload-icon"><FaFileUpload /></div>
                                                <div>DRAG FILE TO UPLOAD</div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </DragAndDrop>
                    </div>
                    <div>
                    <div className="input-group mb-3 browse-button-grp">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="imageUpload" onChange={this.handleChangeImageUpload} accept="image/*"/>
                            <label className="custom-file-label" htmlFor="imageUpload">{this.state.newImage ? this.state.newImage.name : "Choose file"}</label>
                        </div>
                    </div>
                        <button type="submit" className="btn btn-dark browse-button-grp" onClick={(e) => {this.handleClickImageUpload(e)}}>Upload</button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.analysis.users
    };
}

export default connect(mapStateToProps, { uploadImage })(UploadDropzone);
