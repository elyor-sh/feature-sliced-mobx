import axios, {AxiosRequestConfig} from "axios";
import {toast} from 'react-toastify'
import {env} from "../../config";

const BASE_API_URL = env.BASE_API_URL

const httpInstance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 30000,
    // mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

// Interceptor api so'rovlari uchun
httpInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        // config ga tokenni qo'ysa bo'lar edi agar kerak bo'lsa
        return config;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
            toastId: 'ReqError'
        })
        return Promise.reject(error);
    },
);

// Interceptor api javoblari uchun
httpInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {

        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
            toastId: 'ResError'
        })
        return Promise.reject(error.response);
    },
)

export default httpInstance