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
            getInfo(dispatch, response.data.names);
        }).catch((error) => {
            console.log("ERROR", error);
        });
    }
}

export function getInfo(dispatch, names) {
    // return (dispatch) => {
    //     // return instance.post(
    //     //     `/crawler`
    //     // ).then((response) => {
    //     //     dispatch({
    //     //         type: GET_INFO,
    //     //         payload: response.data
    //     //     });
    //     // }).catch((error) => {
    //     //     console.log("ERROR", error);
    //     // });
    // }
    var payload = [
        {
            name: "ladygaga",
            occ_id: "musician",
            occupation: [
                "Singer",
                "Songwriter",
                "Actress",
                "Record Producer"],
            info: {
                    playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
            }
        },
        {
            name: "David Bowie",
            occ_id: "musician",
            occupation: [
                "Singer",
                "Songwriter",
                "Rock God"],
            info: {
                    playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
            }
        },
    ];
    dispatch({
        type: GET_INFO,
        payload
    });
    history.push('/results');
}
