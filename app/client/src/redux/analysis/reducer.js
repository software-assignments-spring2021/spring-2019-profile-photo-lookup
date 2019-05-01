import {
    GET_CELEBRITY_BBOX,
    GET_CELEBRITY_INFO,
    UPLOAD_STUDENT_IMAGE
} from './types';

const initialState = {
    bbox: null,
    celebs: [],
    students: []
};

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_CELEBRITY_BBOX:
            return { ...state, bbox: action.payload };
        case GET_CELEBRITY_INFO:
            return { ...state, celebs: action.payload };
        case UPLOAD_STUDENT_IMAGE:
            return { ...state, students: action.payload };
        default:
            return state
    }
}
