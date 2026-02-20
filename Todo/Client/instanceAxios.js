import axios from 'axios'

export const todoBaseUrl = axios.create({
    baseURL: 'http://localhost:5000/todo',
});