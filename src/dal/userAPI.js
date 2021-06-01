import {$authHost, $host} from './index';

export const registration = async (emai, password) => {
    const response = await $host.post('api/auth/registration', {emai, password, role: 'ADMIN'})
    return response
};

export const login = async (emai, password) => {
    const response = await $host.post('api/auth/login', {emai, password})
    return response
};

export const check = async () => {
    const response = await $host.post('api/auth/registration', {emai, password, role: 'ADMIN'})
    return response
};