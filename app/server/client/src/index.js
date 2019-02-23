import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/home" component={App}/>
                </Switch>
            </div>
        </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
