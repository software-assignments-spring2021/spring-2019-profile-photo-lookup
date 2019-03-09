import React, { Component } from 'react';
import './uploadDropzone.css';
import { connect } from 'react-redux';
import { uploadImage } from '../redux/analysis/action.js';

class UploadDropzone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newImage: null
        };
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
        this.setState({ newImage: null });
    }

    render() {
        return (
            <div>
                <h1>HELLO WORLD</h1>
                <form>
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
