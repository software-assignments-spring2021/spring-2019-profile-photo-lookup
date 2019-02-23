import instance from '../instance';
import {
    TEST_GET
} from './types';


export default function fetchTest() {
    return (dispatch) => {
        return instance.get(
            `/users`
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
