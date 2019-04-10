import React, { Component } from 'react';
import './resultPage.css';
import { connect } from 'react-redux';

class ResultPage extends Component {

    renderNames() {
        return this.props.info.map((name, i) => {
            return <h1 key={i}>{name.name}</h1>
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
        names: state.analysis.names,
        info: state.analysis.info
    };
}

export default connect(mapStateToProps, null)(ResultPage);
