import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notificationAPI } from '../api/notification.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ArrowLeft, Save, Flag, Users as UsersIcon, Link as LinkIcon, Bell } from 'lucide-react';
import { cn } from '../utils';
import './CreateNotification.css';

const CreateNotification = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        message: '',
        link: '',
        linkText: '',
        targetAudience: ['all'],
        priority: 'medium',
        isActive: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const toggleAudience = (audience) => {
        setFormData(prev => {
            if (audience === 'all') return { ...prev, targetAudience: ['all'] };

            const current = prev.targetAudience.filter(a => a !== 'all');
            if (current.includes(audience)) {
                return { ...prev, targetAudience: current.length > 1 ? current.filter(a => a !== audience) : ['all'] };
            } else {
                return { ...prev, targetAudience: [...current, audience] };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await notificationAPI.createNotification(formData);
            navigate('/admin/notifications');
        } catch (error) {
            console.error(error);
            alert('Failed to create notification');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-notification-form-page">
            <div className="admin-page-header">
                <Button variant="ghost" onClick={() => navigate(-1)} icon={ArrowLeft} />
                <div>
                    <h1 className="admin-page-title">Create Notification</h1>
                    <p className="admin-page-subtitle">Send a new alert to users</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="admin-notification-form">
                <Card>
                    {/* Title */}
                    <div className="admin-input-group">
                        <label className="admin-input-label">Title *</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="admin-input"
                            placeholder="Enter notification title"
                            required
                            maxLength={200}
                        />
                        <p className="admin-char-count">{formData.title.length}/200</p>
                    </div>

                    {/* Message */}
                    <div className="admin-input-group">
                        <label className="admin-input-label">Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="admin-input admin-textarea-lg"
                            placeholder="Enter notification message"
                            required
                            maxLength={1000}
                        />
                        <p className="admin-char-count">{formData.message.length}/1000</p>
                    </div>

                    {/* Audience */}
                    <div className="admin-input-group">
                        <label className="admin-input-label">Target Audience *</label>
                        <div className="admin-audience-group">
                            {['all', 'member', 'instructor'].map((audience) => {
                                const active = formData.targetAudience.includes(audience);
                                return (
                                    <button
                                        key={audience}
                                        type="button"
                                        onClick={() => toggleAudience(audience)}
                                        className={cn("admin-audience-btn", active && "active")}
                                    >
                                        <UsersIcon size={16} />
                                        {audience}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Priority */}
                    <div className="admin-input-group">
                        <label className="admin-input-label">Priority</label>
                        <div className="admin-priority-group">
                            {['low', 'medium', 'high'].map(p => (
                                <button
                                    key={p}
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, priority: p }))}
                                    className={cn("admin-priority-btn", p, formData.priority === p && "active")}
                                >
                                    <Flag size={16} />
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Link */}
                    <div className="admin-input-row">
                        <div className="admin-input-group">
                            <label className="admin-input-label">Link URL (Optional)</label>
                            <div className="admin-input-with-icon">
                                <LinkIcon size={16} className="admin-input-icon" />
                                <input
                                    type="url"
                                    name="link"
                                    value={formData.link}
                                    onChange={handleChange}
                                    className="admin-input admin-input-padded"
                                    placeholder="https://..."
                                />
                            </div>
                        </div>
                        <div className="admin-input-group">
                            <label className="admin-input-label">Link Text (Optional)</label>
                            <input
                                type="text"
                                name="linkText"
                                value={formData.linkText}
                                onChange={handleChange}
                                className="admin-input"
                                placeholder="Button Label"
                            />
                        </div>
                    </div>

                    {/* Active Toggle */}
                    <div className="admin-toggle-card">
                        <div className="admin-toggle-info">
                            <Bell size={20} />
                            <div>
                                <span className="admin-toggle-text">Active Status</span>
                                <span className="admin-toggle-subtext">Enable to send immediately</span>
                            </div>
                        </div>
                        <label className="admin-switch">
                            <input
                                type="checkbox"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                            />
                            <span className="admin-slider"></span>
                        </label>
                    </div>
                </Card>

                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={Save}
                    isLoading={loading}
                >
                    Create Notification
                </Button>
            </form>
        </div>
    );
};

export default CreateNotification;
