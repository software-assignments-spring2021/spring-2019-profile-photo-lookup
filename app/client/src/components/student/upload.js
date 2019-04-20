import React, { Component } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { post } from 'axios';

import DragAndDrop from '../upload/dragAndDrop.js'
import Result from './result.js'

import './upload.css';

class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newImage: null,
            students: null,
            loading: false
        };
    }

    handleDrop = (files) => {
        this.drawCanvas(files[0]);
    }

    handleChangeImageUpload = (e) => {
        this.drawCanvas(e.target.files[0]);
    };

    drawCanvas = (file) => {
        // var element = document.getElementById("upload-icon");
        // element.classList.toggle("canvas-size");

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
        this.setState({
            loading: true
        })
        e.preventDefault();
        let formData = new FormData();
        if (this.state.newImage) {
            formData.append("image", this.state.newImage);
        }
        const url = 'http://127.0.0.1:8000/rekognition/student';
        return post(url, formData).then((response)=>{
            this.setState({
                students: response.data.students,
                loading: false
            })
        })
    }

    renderResult() {
        if(this.state.students){
            const students = this.state.students
            return <Result students = {students}/>
        }
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
                <RingLoader
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
                />
                {this.renderResult()}
            </div>
        );
    }
}

export default Upload
