import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Dumbbell, Mail, Lock, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(email, password);
            const from = location.state?.from?.pathname || '/admin';
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-container">
            {/* Background Decor */}
            <div className="admin-login-bg-decor">
                <div className="admin-decor-blob admin-decor-blob-1" />
                <div className="admin-decor-blob admin-decor-blob-2" />
                <div className="admin-decor-blob admin-decor-blob-3" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="admin-login-card"
            >
                <div className="admin-icon-wrapper">
                    <div className="admin-icon-box">
                        <Dumbbell size={32} />
                    </div>
                </div>

                <h2 className="admin-login-title">Welcome Back</h2>
                <p className="admin-login-subtitle">Sign in to access admin dashboard</p>

                {error && (
                    <div className="admin-error-alert">
                        <span style={{ marginRight: '0.5rem' }}>⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="admin-form-group">
                        <label className="admin-form-label">Email Address</label>
                        <div className="admin-input-wrapper">
                            <Mail className="admin-input-icon" size={20} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="admin-form-input"
                                placeholder="admin@getfit.com"
                            />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label className="admin-form-label">Password</label>
                        <div className="admin-input-wrapper">
                            <Lock className="admin-input-icon" size={20} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="admin-form-input"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        fullWidth
                        size="lg"
                        isLoading={loading}
                        icon={ArrowRight}
                    >
                        Sign In
                    </Button>
                </form>

                <Link to="/" className="admin-back-link">
                    ← Back to Website
                </Link>
            </motion.div>

            <div className="admin-footer-text">
                © {new Date().getFullYear()} GetFit Admin Portal
            </div>
        </div>
    );
};

export default Login;
