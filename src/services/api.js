import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

const config = {
    headers: {
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
}

export { api, config };