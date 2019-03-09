import instance from '../instance';
import {
    UPLOAD_IMAGE
} from './types';

export function uploadImage(image) {
    return (dispatch) => {
        return instance.post(
            `/rekognition`,
            image
        ).then((response) => {
            dispatch({
                type: UPLOAD_IMAGE,
                payload: response.data
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}
