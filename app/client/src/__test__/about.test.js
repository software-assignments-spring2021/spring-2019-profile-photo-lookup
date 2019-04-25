import React from 'react';
import About from '../components/about/about.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducer';

it('About renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(reducer);
    ReactDOM.render(<Provider store={store}><About /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
