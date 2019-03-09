import React, { Component } from 'react';
import './uploadResult.css';

class UploadResult extends Component {
    renderNames() {
        return this.props.names.map((name, i) => {
            return <h1 key={i}>{name}</h1>
        });
    }

    render() {
        return (
            <div>
                <h2>Results</h2>
                {this.renderNames()}
            </div>
        );
    }
}

export default UploadResult;
