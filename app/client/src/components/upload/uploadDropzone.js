import React, { Component } from 'react';
import './uploadDropzone.css';
import DragAndDrop from './dragAndDrop.js'
import { connect } from 'react-redux';
import { uploadCelebrityImage } from '../../redux/analysis/action.js';
import { FaFileUpload } from 'react-icons/fa';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/core';

class UploadDropzone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newImage: null
        };
    }

    handleDrop = (files) => {
        this.drawCanvas(files[0]);
    }

    handleChangeImageUpload = (e) => {
        this.drawCanvas(e.target.files[0]);
    };

    drawCanvas = (file) => {

        var reader = new FileReader();
        reader.readAsDataURL(file);

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');

        reader.onloadend = function (e) {
            this.setState({
                newImage: file
            })

            var img = new Image();
            img.onload = function(){
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img,0,0);

                // TODO: UNCOMMENT TO DRAW RECTANGLE AROUND A FACE
                // ctx.rect(50, 20, 75, 75);
                // ctx.stroke();
            }
            img.src = e.target.result;
        }.bind(this);
    }

    handleClickImageUpload = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (this.state.newImage) {
            formData.append("image", this.state.newImage);
        }
        this.props.uploadCelebrityImage(formData);
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <DragAndDrop handleDrop={this.handleDrop}>
                            <div className="dropzone-content">
                                <div className="dropzone-content-text">
                                    <canvas ref="canvas" id="uploaded-img"/>
                                    {
                                        !this.state.newImage ?
                                            <div className="upload-grp">
                                                <div id="upload-icon"><FaFileUpload /></div>
                                                <div>DRAG FILE TO UPLOAD</div>
                                            </div> : null
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
                        <button type="submit" className="btn upload-btn browse-button-grp" onClick={(e) => {this.handleClickImageUpload(e)}}>Upload</button>
                    </div>
                </form>
                {/*}<RingLoader
                    css={css`
                    position: relative;
                    top: 20px;
                    display: block;
                    margin: 0 auto;
                    border-color: red;
                `   }
                    sizeUnit={"px"}
                    size={80}
                    color={'white'}
                    loading={this.state.loading}
                />*/}
            </div>
        );
    }
}

export default connect(null, { uploadCelebrityImage })(UploadDropzone);
