import React from 'react';
import Student from '../components/student/student.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducer';

it('Student renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(reducer);
    ReactDOM.render(<Provider store={store}><Student /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
