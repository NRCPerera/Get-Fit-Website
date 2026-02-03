import React, { createContext, useState, useEffect, useContext } from 'react';
import { authAPI } from '../api/auth.api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const { data } = await authAPI.getMe();
                setUser(data);
            } catch (error) {
                console.error('Auth verification failed', error);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        }
        setLoading(false);
    };

    const login = async (email, password) => {
        const res = await authAPI.login({ email, password });
        const { user, accessToken, refreshToken } = res.data;

        // Check if user is admin
        if (user.role !== 'admin') {
            throw new Error('Unauthorized access. Admin only.');
        }

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        return user;
    };

    const logout = async () => {
        try {
            await authAPI.logout();
        } catch (e) {
            console.error(e);
        }
        localStorage.clear();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
