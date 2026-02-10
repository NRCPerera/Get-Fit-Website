import apiClient from './client';

export const workoutAPI = {
    getAllWorkouts: async (params) => {
        const res = await apiClient.get('/workouts', { params });
        return res.data;
    },
    getPublicWorkouts: async (params) => {
        const res = await apiClient.get('/workouts/public', { params });
        return res.data;
    },
    getWorkoutById: async (id) => {
        const res = await apiClient.get(`/workouts/${id}`);
        return res.data;
    },
    createWorkout: async (data) => {
        const res = await apiClient.post('/workouts', data);
        return res.data;
    },
    updateWorkout: async (id, data) => {
        const res = await apiClient.put(`/workouts/${id}`, data);
        return res.data;
    },
    deleteWorkout: async (id) => {
        const res = await apiClient.delete(`/workouts/${id}`);
        return res.data;
    },
    toggleWorkoutStatus: async (id, isActive) => {
        const res = await apiClient.patch(`/workouts/${id}/status`, { isActive });
        return res.data;
    }
};
