import instance from '../instance';
import {
    TEST_GET,
    UPLOAD_IMAGE
} from './types';

export function fetchTest() {
    return (dispatch) => {
        return instance.get(
            `/`
        ).then((response) => {
            dispatch({
                type: TEST_GET,
                payload: response.data
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}

export function uploadImage(image) {
    console.log(image)
    return (dispatch) => {
        return instance.post(
            `/rekognition`,
            {
                image
            }
        ).then((response) => {
            console.log(response.data);
            dispatch({
                type: UPLOAD_IMAGE,
                payload: response.data
            });
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}
