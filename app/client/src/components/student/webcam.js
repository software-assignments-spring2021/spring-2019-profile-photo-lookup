import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { connect } from 'react-redux';
import { uploadStudentImage } from '../../redux/analysis/action.js';
import { css } from '@emotion/core';
import { CircleLoader } from 'react-spinners';

import Result from './result.js'
import "./webcam.css"


class Recognize extends Component {

    constructor(props){
        super(props);
        this.state = {
            students: null,
            screenshot: null,
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

    componentDidUpdate(prevProps){
        if(this.props.students.length !== 0){
            if(prevProps.students !== this.props.students){
                this.setState({
                    students: this.props.students
                })
                if(this.state.loading === true){
                    this.setState({
                        loading: false
                    })
                }
            }
        }
    }

    captureUpload() {
        var capture = this.refs.webcam.getScreenshot();
        this.setState({
            students: null,
            screenshot: capture,
            loading: true
        });
        var blob = this.base64toBlob(capture)
        var formData = new FormData();
        formData.append("image", blob)
        this.props.uploadStudentImage(formData)
    }

    renderResult() {
        if(this.state.students){
            return <Result students = {this.state.students}/>
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
                <button type="submit" className="btn upload-btn browse-button-grp" onClick={this.captureUpload.bind(this)}>Who is here?</button>
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
            {this.renderResult()}
        </div>
       )
    }
}

function mapStateToProps(state) {
    return {
        students: state.analysis.students
    };
}

export default connect(mapStateToProps, { uploadStudentImage })(Recognize);
