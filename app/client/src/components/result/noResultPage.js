import React, { Component } from 'react';
import './noResultPage.css';

class NoResultPage extends Component {

    render() {
        return (
            <div id="no-result-page">
                <h2 className="no-result-text">Oops! We can't find who you're looking for!</h2>
                <h2 className="no-result-text">Maybe try somebody more famous?</h2>
            </div>
        );
    }
}

export default NoResultPage;
