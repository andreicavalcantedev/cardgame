import axios from "axios";

export const api = axios.create({
    baseURL: 'https://633ddadb7e19b17829171a83.mockapi.io',
    headers: {
        'Content-Type': 'application/json'
    }
}); 