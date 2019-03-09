import React, { Component } from 'react';
import './uploadDropzone.css';
import DragAndDrop from './dragAndDrop.js'
import { connect } from 'react-redux';
import { uploadImage } from '../redux/analysis/action.js';

class UploadDropzone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newImage: null
            // files: [
            //
            // ]
        };
    }

    handleDrop = (files) => {
        // let fileList = this.state.files
        // for (var i = 0; i < files.length; i++) {
        //   if (!files[i].name) return
        //   fileList.push(files[i].name)
        // }
        // this.setState({files: fileList})
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
                    <DragAndDrop handleDrop={this.handleDrop}>
                        <div className="dropzone-content">
                            {this.state.newImage ? this.state.newImage.name : null}
                        </div>
                    </DragAndDrop>
                    <div className="form-group">
                        <label htmlFor="image">Upload image</label>
                        <input type="file" className="form-control-file" id="imageUpload" onChange={this.handleChangeImageUpload} accept="image/*"/>
                    </div>
                    <button type="submit" className="btn btn-success" onClick={(e) => {this.handleClickImageUpload(e)}}>Upload</button>
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
