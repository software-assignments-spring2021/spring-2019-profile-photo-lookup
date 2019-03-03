import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'production') {
    baseURL = window.location.origin;
} else {
    baseURL = 'http://localhost:8000/';
}

let instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken'
});

export default instance;
