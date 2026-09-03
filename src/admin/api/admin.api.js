import apiClient from './client';

export const adminAPI = {
    // Dashboard
    getDashboardStats: async () => {
        const res = await apiClient.get('/admin/dashboard');
        return res.data;
    },

    // Users
    getAllUsers: async (params) => {
        const res = await apiClient.get('/admin/users', { params });
        return res.data;
    },
    getUserDetails: async (id) => {
        const res = await apiClient.get(`/admin/users/${id}`);
        return res.data;
    },
    suspendUser: async (id) => {
        const res = await apiClient.post(`/admin/users/${id}/suspend`);
        return res.data;
    },
    activateUser: async (id) => {
        const res = await apiClient.post(`/admin/users/${id}/activate`);
        return res.data;
    },
    allocateInstructor: async (data) => {
        const res = await apiClient.post('/admin/allocate-instructor', data);
        return res.data;
    },

    // Instructors
    getAllInstructors: async () => {
        const res = await apiClient.get('/admin/instructors');
        return res.data;
    },
    createInstructor: async (instructorData) => {
        const res = await apiClient.post('/admin/instructors', instructorData);
        return res.data;
    },
    approveInstructor: async (userId) => {
        const res = await apiClient.post(`/admin/instructors/${userId}/approve`);
        return res.data;
    },
    updateInstructor: async (id, data) => {
        const res = await apiClient.put(`/admin/instructors/${id}`, data);
        return res.data;
    },
    deleteInstructor: async (id) => {
        const res = await apiClient.delete(`/admin/instructors/${id}`);
        return res.data;
    },

    // Instructor Assignments
    getAllInstructorAssignments: async (params) => {
        const res = await apiClient.get('/admin/instructor-assignments', { params });
        return res.data;
    },

    // Payments
    getAllPayments: async (params) => {
        const res = await apiClient.get('/admin/payments', { params });
        return res.data;
    },

    // Exercises
    getAllExercises: async () => {
        const res = await apiClient.get('/admin/exercises');
        return res.data;
    },
    createExercise: async (data) => {
        const res = await apiClient.post('/exercises', data);
        return res.data;
    },
    updateExercise: async (id, data) => {
        const res = await apiClient.put(`/exercises/${id}`, data);
        return res.data;
    },
    deleteExercise: async (id) => {
        const res = await apiClient.delete(`/exercises/${id}`);
        return res.data;
    },

    // Analytics
    getAnalytics: async () => {
        const res = await apiClient.get('/admin/analytics');
        return res.data;
    },

    // Subscriptions/Allocations
    getAllSubscriptions: async (params) => {
        const res = await apiClient.get('/admin/subscriptions', { params });
        return res.data;
    },

    // Notifications
    getAllNotifications: async (params) => {
        const res = await apiClient.get('/notifications/admin', { params });
        return res.data;
    },
    getNotificationById: async (id) => {
        const res = await apiClient.get(`/notifications/admin/${id}`);
        return res.data;
    },
    createNotification: async (notificationData) => {
        const res = await apiClient.post('/notifications', notificationData);
        return res.data;
    },
    updateNotification: async (id, notificationData) => {
        const res = await apiClient.put(`/notifications/admin/${id}`, notificationData);
        return res.data;
    },
    deleteNotification: async (id) => {
        const res = await apiClient.delete(`/notifications/admin/${id}`);
        return res.data;
    },
};
