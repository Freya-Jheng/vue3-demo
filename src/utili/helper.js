import axios from 'axios';

const baseURL = 'http://139.162.85.127:8080';

const axiosInstance = axios.create({
    baseURL,
});

const frontAxiosInstance = axios.create({
    baseURL,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (err) => Promise.reject(err)
)

export const apiHelper = axiosInstance;
export const frontAPIHelper = frontAxiosInstance;
