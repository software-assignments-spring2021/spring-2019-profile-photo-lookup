import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'production') {
    baseURL = window.location.origin;
} else {
    baseURL = 'http://localhost:3000/';
}

let instance = axios.create({
    baseURL: baseURL
});

export default instance;
