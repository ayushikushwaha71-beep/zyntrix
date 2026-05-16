import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL) {
    throw new Error("VITE_API_URL is missing in environment variables");
}

const API_URL = `${BASE_URL}/api`;

const api = axios.create({
    baseURL: API_URL,
});

// Attach token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

/* =========================
   AUTH API
========================= */
export const authAPI = {
    register: (data) => api.post('/auth/register', data),
    login: (data) => api.post('/auth/login', data),
    getMe: () => api.get('/auth/me'),
};

/* =========================
   NOTES API
========================= */
export const noteAPI = {
    getNotes: (search = '', tag = '') => {
        let url = '/notes?';
        if (search) url += `search=${search}&`;
        if (tag) url += `tag=${tag}`;
        return api.get(url);
    },
    getNote: (id) => api.get(`/notes/${id}`),
    createNote: (data) => api.post('/notes', data),
    updateNote: (id, data) => api.put(`/notes/${id}`, data),
    deleteNote: (id) => api.delete(`/notes/${id}`),
    toggleShare: (id) => api.put(`/notes/${id}/share`),
    getPublicNote: (shareId) => api.get(`/notes/public/${shareId}`),
};