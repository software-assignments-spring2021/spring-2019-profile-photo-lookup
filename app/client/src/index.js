import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './redux/reducer';
import './index.css';
import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import CelebrityUpload from './components/upload/celebrityUpload.js'
import Student from './components/student/student.js'
import About from './components/about/about.js';
import ResultPage from './components/result/resultPage.js';
import NoResultPage from './components/result/noResultPage.js';
import ErrorPage from './components/error/errorPage.js';
import * as serviceWorker from './serviceWorker';
import history from './history';


const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/celebrity" component={CelebrityUpload}/>
                    <Route path="/student" component={Student}/>
                    <Route exact path="/results" component={ResultPage}/>
                    <Route path="/noresults" component={NoResultPage}/>
                    <Route path="/error" component={ErrorPage}/>
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
