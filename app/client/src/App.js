import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import fetchTest from './redux/analysis/action.js';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    handleClick = () => {
        this.props.fetchTest();
    }

    render() {
        return (
            <div className="App">
                <h1>Usersss</h1>
                {this.props.users ? this.props.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                ) : null}
                <button type="button" className="btn btn-primary" onClick={() => {this.handleClick()}}>Fetch from backend</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.analysis.users
    };
}

export default connect(mapStateToProps, { fetchTest })(App);
