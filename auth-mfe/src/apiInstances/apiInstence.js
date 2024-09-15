import axios from "axios";

export const syscoShopBff = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: false,
})
