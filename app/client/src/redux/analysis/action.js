import instance from '../instance';
import {
    TEST_GET
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
