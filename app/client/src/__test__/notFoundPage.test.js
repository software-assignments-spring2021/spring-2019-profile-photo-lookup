import React from 'react';
import NotFoundPage from '../components/notFound/notFoundPage.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducer';

it('About renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(reducer);
    ReactDOM.render(<Provider store={store}><NotFoundPage /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
