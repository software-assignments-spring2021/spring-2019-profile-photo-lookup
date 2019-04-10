import instance from '../instance';
import {
    UPLOAD_IMAGE,
    GET_INFO
} from './types';
import history from '../../history.js';

export function uploadImage(image) {
    return (dispatch) => {
        return instance.post(
            `/rekognition`,
            image
        ).then((response) => {
            dispatch({
                type: UPLOAD_IMAGE,
                payload: response.data.names
            });
            history.push('/results');
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}

export function getInfo() {
    return (dispatch) => {
        return instance.post(
            `/crawler`
        ).then((response) => {
            dispatch({
                type: GET_INFO,
                payload: response.data
            });
            // history.push('/results');
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}
