import axios from 'axios';
require('dotenv').config();

const url = process.env.BASE_URL || 'http://localhost:8080';

const client = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default client;
