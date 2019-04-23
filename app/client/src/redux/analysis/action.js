import instance from '../instance';
import {
    UPLOAD_CELEBRITY_IMAGE,
    UPLOAD_STUDENT_IMAGE
} from './types';
import history from '../../history.js';

export function uploadCelebrityImage(image) {
    return (dispatch) => {
        return instance.post(
            `/rekognition/celebrity`,
            image
        ).then((response) => {
            getInfo(dispatch, response.data.names);
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}

export function getInfo(dispatch, names) {
    return instance.post(
        `/crawler`,
        {
            names
        }
    ).then((response) => {
        dispatch({
            type: UPLOAD_CELEBRITY_IMAGE,
            payload: response.data
        });
        history.push('/results');
    }).catch((error) => {
        console.log("ERROR", error);
    });
}

export function uploadStudentImage(image) {
    return (dispatch) => {
        return instance.post(
            `/rekognition/student`,
            image
        ).then((response) => {
            dispatch({
                type: UPLOAD_STUDENT_IMAGE,
                payload: response.data.students
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}
