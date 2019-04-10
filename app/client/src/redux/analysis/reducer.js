import {
    UPLOAD_IMAGE,
    GET_INFO
} from './types';

const initialState = {
    names: []
};

export default function(state=initialState, action) {
    switch(action.type) {
        case UPLOAD_IMAGE:
            return { ...state, names: action.payload };
        case GET_INFO:
            return { ...state, info: action.payload}
        default:
            return state
    }
}
