import React from 'react';
import Home from '../components/home/home.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducer';

it('Home renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(reducer);
    ReactDOM.render(<Provider store={store}><Home /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
