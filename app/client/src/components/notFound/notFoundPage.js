import React, { Component } from 'react';
import './notFoundPage.css';

class NotFoundPage extends Component {

    render() {
        return (
            <div id="not-found-page">
                <h1>Page Not Found</h1>
                <h2 className="not-found-text">Sorry, nothing to see here.</h2>
                <h2 className="not-found-text"><a className="not-found-link" href="/home">Back to Home</a></h2>
			</div>
        );
    }
}
export default NotFoundPage;
