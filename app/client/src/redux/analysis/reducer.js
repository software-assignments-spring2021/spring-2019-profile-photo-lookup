import {
    UPLOAD_IMAGE
} from './types';

const initialState = {
    names: []
};

export default function(state=initialState, action) {
    switch(action.type) {
        case UPLOAD_IMAGE:
            return { ...state, names: action.payload };
        default:
            return state
    }
}
