import {
    TEST_GET,
    UPLOAD_IMAGE
} from './types';

const initialState = {
    users: 'user',
    image: null
};

export default function(state=initialState, action) {
    switch(action.type) {
        case TEST_GET:
            return { ...state, users: action.payload };
        case UPLOAD_IMAGE:
            return { ...state, image: action.payload };
        default:
            return state
    }
}
