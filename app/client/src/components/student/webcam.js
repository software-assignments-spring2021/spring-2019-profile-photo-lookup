import React, { Component } from 'react';
import { post } from 'axios';
import Webcam from 'react-webcam';
import { css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';

import Result from './result.js'

import "./webcam.css"


class Recognize extends Component {
    constructor(props){
        super(props);
        this.state = {
            screenshot: null,
            students: null,
            loading: false
        }
    }

    base64toBlob = (capture) => {
        var base64 = capture.split(',')[1]
        var byteCharacters = atob(base64)
        var byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], {type: 'image/jpeg'});
        return blob
    }

    captureUpload() {
        var capture = this.refs.webcam.getScreenshot();
        this.setState({
            screenshot: capture,
            loading: true
        });
        var blob = this.base64toBlob(capture)

        const url = 'http://127.0.0.1:8000/rekognition/student';
        var formData = new FormData();
        formData.append("image", blob)
        return post(url, formData).then((response)=>{
            this.setState({
                students: response.data.students,
                loading: false
            })
        })
    }
    
    renderInner() {
        if(this.state.students){
            const students = this.state.students
            return <Result students = {students}/>
        }
    }

    render() {
        return (
        <div className='upload-page'>
            <div id ="webcam">
            <Webcam 
                audio={false}
                minScreenshotHeight={480}
                minScreenshotWidth={640}
                screenshotFormat="image/jpeg"
                ref='webcam'
            />
            <br></br>
            <button onClick={this.captureUpload.bind(this)}> Who is here? </button>
            </div>
            <CircleLoader
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
            {this.renderInner()}
        </div>
       )
    }
}
export default Recognize
