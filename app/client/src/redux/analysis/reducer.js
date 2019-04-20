import {
    UPLOAD_CELEBRITY_IMAGE,
    UPLOAD_STUDENT_IMAGE
} from './types';

const initialState = {
    celebs: [],
    students: []
};

export default function(state=initialState, action) {
    switch(action.type) {
        case UPLOAD_CELEBRITY_IMAGE:
            return { ...state, celebs: action.payload };
        case UPLOAD_STUDENT_IMAGE:
            return { ...state, students: action.payload };
        default:
            return state
    }
}
