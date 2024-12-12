import io from 'socket.io-client';

let socket;
let BASE_URL;
let DEVELOPMENT;

DEVELOPMENT = false;

if (DEVELOPMENT) {
    BASE_URL = 'http://localhost:8083';
} else {
    BASE_URL = 'https://apitwo.bvxtrade.com'
}

if (process) {
    if (process.client) {
        const token = localStorage.getItem('873__jh6bdjktoken');

        if (token) {
            socket = io(`${BASE_URL}`, {
                extraHeaders: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
                transports: ['websocket']
            });
        } else {
            socket = io(`${BASE_URL}`);
        }
    }
} else {
    const token = localStorage.getItem('873__jh6bdjktoken');

    if (token) {
        socket = io(`${BASE_URL}`, {
            extraHeaders: {
                Authorization: `Bearer ${token}`,
                withCredentials: true,
                transports: ['websocket']
            },
        });
    } else {
        socket = io(`${BASE_URL}`);
    }
}




export default socket;