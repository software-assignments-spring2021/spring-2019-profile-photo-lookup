import React from 'react';
import ResultPage from '../components/result/resultPage.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducer';

it('Result renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(reducer);
    ReactDOM.render(<Provider store={store}><ResultPage /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
