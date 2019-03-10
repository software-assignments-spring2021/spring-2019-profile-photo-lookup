import React, { Component } from 'react';
import './resultPage.css';
import { connect } from 'react-redux';

class ResultPage extends Component {

    renderNames() {
        return this.props.names.map((name, i) => {
            return <h1 key={i}>{name}</h1>
        });
    }

    render() {
        return (
            <div id="result-page">
                <h2>Results</h2>
                {this.renderNames()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.analysis.names
    };
}

export default connect(mapStateToProps, null)(ResultPage);
