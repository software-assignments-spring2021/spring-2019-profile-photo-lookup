import React, { Component } from 'react';
import './errorPage.css';

class ErrorPage extends Component {

    render() {
        return (
            <div id="error-page">
                <h2 className="error-text">Oops! Something went wrong!</h2>
                <h2 className="error-text"><a className="eror-contact-us" href="mailto:jhk751@nyu.edu">Contact us</a> to resolve this issue!</h2>
            </div>
        );
    }
}
export default ErrorPage;
