import apiClient from './client';

export const exerciseAPI = {
    getAllExercises: async (params) => {
        const res = await apiClient.get('/exercises', { params });
        return res.data;
    },
    getExerciseById: async (id) => {
        const res = await apiClient.get(`/exercises/${id}`);
        return res.data;
    },
    createExercise: async (data, onUploadProgress) => {
        const res = await apiClient.post('/exercises', data, {
            headers: { 'Content-Type': 'multipart/form-data' },
            timeout: 300000, // 5 minutes for video uploads
            onUploadProgress
        });
        return res.data;
    },
    updateExercise: async (id, data) => {
        const headers = data instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : {};
        const res = await apiClient.put(`/exercises/${id}`, data, {
            headers,
            timeout: 300000 // 5 minutes for video uploads
        });
        return res.data;
    },
    deleteExercise: async (id) => {
        const res = await apiClient.delete(`/exercises/${id}`);
        return res.data;
    },
    setExerciseStatus: async (id, isActive) => {
        const res = await apiClient.patch(`/exercises/${id}/status`, { isActive });
        return res.data;
    },
    bulkSetStatus: async (ids, isActive) => {
        const res = await apiClient.post('/exercises/bulk-status', { ids, isActive });
        return res.data;
    }
};
