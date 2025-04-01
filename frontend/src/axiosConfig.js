import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://strategicdash.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
