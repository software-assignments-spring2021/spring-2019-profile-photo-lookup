import React, { Component } from 'react';
import Switch from "react-switch"
import Recognize from './webcam.js';
import Upload from './upload.js'
import './student.css';

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: true
        };
    }

    changeDisplay = () => {
        let {display} = this.state;
        this.setState({
            display: display === true ? false : true
        })
    }

    renderInner() {
        let { display } = this.state;

        if (display === true) {
            return <Recognize />
        } else if (display === false){
            return <Upload />
        }
    }

    render() {
        return (
            <div className = "App container-fluid upload-page">
                <header className="student-upload-header">
                    <h3>Student</h3>
                    <p> Capture with Webcam or Upload an Image!</p>
                </header>
                <Switch onChange={this.changeDisplay} checked={this.state.display}/>
                {this.renderInner()}
            </div>
        );
    }
}

export default Student;
