import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dash-botgenerai.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
