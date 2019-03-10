import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './redux/reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';
import Navbar from './components/navbar.js';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/home" component={App}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
