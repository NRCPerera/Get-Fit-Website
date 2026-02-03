import apiClient from './client';

export const notificationAPI = {
    getAllNotifications: async (params) => {
        const res = await apiClient.get('/notifications/admin', { params });
        return res.data;
    },

    getNotificationById: async (id) => {
        const res = await apiClient.get(`/notifications/admin/${id}`);
        return res.data;
    },

    createNotification: async (data) => {
        const res = await apiClient.post('/notifications', data);
        return res.data;
    },

    deleteNotification: async (id) => {
        const res = await apiClient.delete(`/notifications/admin/${id}`);
        return res.data;
    },

    updateNotification: async (id, data) => {
        const res = await apiClient.put(`/notifications/admin/${id}`, data);
        return res.data;
    }
};
