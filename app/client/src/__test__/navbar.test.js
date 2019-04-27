import React from 'react';
import Navbar from '../components/navbar/navbar.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducer';
import { Router, Route, Switch } from "react-router-dom";
import Home from '../components/home/home.js';
import About from '../components/about/about.js';
import CelebrityUpload from '../components/upload/celebrityUpload.js'
import Student from '../components/student/student.js'
import ResultPage from '../components/result/resultPage.js';
import history from '../history';

it('Navbar renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(reducer);
    ReactDOM.render(<Provider store={store}>
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
                </Switch>
            </div>
        </Router>
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
