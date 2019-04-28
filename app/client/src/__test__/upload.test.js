import React from 'react';
import CelebrityUpload from '../components/upload/celebrityUpload.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducer';

it('CelebrityUpload renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(reducer);
    ReactDOM.render(<Provider store={store}><CelebrityUpload /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
