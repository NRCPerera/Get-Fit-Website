import apiClient from './client';

export const authAPI = {
    // Login user
    login: async (credentials) => {
        const { data } = await apiClient.post('/auth/login', credentials);
        return data;
    },

    // Logout user
    logout: async () => {
        const response = await apiClient.post('/auth/logout');
        return response.data;
    },

    // Get current user
    getMe: async () => {
        const response = await apiClient.get('/auth/me');
        return response.data;
    },
};
