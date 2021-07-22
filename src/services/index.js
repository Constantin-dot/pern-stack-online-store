import axios from "axios";
import { REACT_APP_API_URL } from "../utils/consts";

const $host = axios.create({
    baseURL: REACT_APP_API_URL, //process.env.REACT_APP_API_URL, "http://localhost:5000",
});

const $authHost = axios.create({
    baseURL: REACT_APP_API_URL,
});

const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
