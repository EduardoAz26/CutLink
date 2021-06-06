// Importação da api que encurta os links copiados.

// 844df95e1802e279910b76925c8ffd7612db0bab

import axios from 'axios';

export const key = '844df95e1802e279910b76925c8ffd7612db0bab';

const api = axios.create({

    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;

// https://api-ssl.bitly.com/v4/