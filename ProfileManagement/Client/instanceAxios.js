import axios from 'axios'

export const profileBaseUrl = axios.create({
    baseURL: 'http://localhost:5000/profile',
});