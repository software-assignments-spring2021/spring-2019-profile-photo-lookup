import {
    TEST_GET
} from './types';

const initialState = {
    users: null
};

export default function(state=initialState, action) {
    switch(action.type) {
        case TEST_GET:
            return { ...state, users: action.payload };
        default:
            return state
    }
}
