import instance from '../instance';
import {
    UPLOAD_IMAGE
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
