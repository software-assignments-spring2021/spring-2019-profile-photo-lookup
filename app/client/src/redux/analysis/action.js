import instance from '../instance';
import {
    GET_CELEBRITY_BBOX,
    GET_CELEBRITY_INFO,
    UPLOAD_STUDENT_IMAGE
} from './types';
import history from '../../history.js';
import _ from 'lodash';

export function uploadCelebrityImage(image) {
    return (dispatch) => {
        return instance.post(
            `/rekognition/celebrity`,
            image
        ).then((response) => {
            var payload = {
                image,
                data: response.data
            };
            dispatch({
                type: GET_CELEBRITY_BBOX,
                payload
            });
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
            type: GET_CELEBRITY_INFO,
            payload: response.data
        });
        if (_.isEmpty(response.data)) {
            history.push('/noresults');
        } else {
            history.push('/results');
        }

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
