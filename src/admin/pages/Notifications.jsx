import React, { useState, useEffect } from 'react';
import { adminAPI } from '../api/admin.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
    Bell,
    Plus,
    Trash2,
    Edit,
    CheckCheck,
    Clock,
    Users
} from 'lucide-react';
import { cn } from '../utils';
import { useNavigate } from 'react-router-dom';
import './Notifications.css';

const NotificationsPage = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        loadNotifications();
    }, [filter]);

    const loadNotifications = async () => {
        setLoading(true);
        try {
            const params = {};
            if (filter !== 'all') params.isActive = filter === 'active';
            const res = await adminAPI.getAllNotifications(params);
            setNotifications(res?.data?.items || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteNotification = async (id) => {
        if (!window.confirm('Are you sure you want to delete this notification?')) return;
        try {
            await adminAPI.deleteNotification(id);
            setNotifications(prev => prev.filter(n => n._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'high': return 'priority-high';
            case 'medium': return 'priority-medium';
            default: return 'priority-low';
        }
    };

    return (
        <div className="admin-notifications-page">
            <div className="admin-page-header">
                <div>
                    <h1 className="admin-page-title">Notifications</h1>
                    <p className="admin-page-subtitle">Manage and send system-wide notifications</p>
                </div>
                <Button icon={Plus} onClick={() => navigate('/admin/notifications/create')}>Create Notification</Button>
            </div>

            <div className="admin-filter-tabs">
                {['all', 'active', 'inactive'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn("admin-filter-tab", filter === f && "active")}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="admin-loading">
                    <div className="admin-loading-spinner"></div>
                </div>
            ) : notifications.length === 0 ? (
                <Card className="admin-notifications-empty">
                    <div className="admin-empty-icon">
                        <Bell size={32} />
                    </div>
                    <h3>No notifications found</h3>
                    <p>Create a new notification to communicate with users.</p>
                    <Button variant="outline" icon={Plus} onClick={() => navigate('/admin/notifications/create')}>
                        Create Notification
                    </Button>
                </Card>
            ) : (
                <div className="admin-notifications-grid">
                    {notifications.map((notification) => (
                        <Card key={notification._id} className="admin-notification-card">
                            <div className="admin-notification-wrapper">
                                <div className="admin-notification-main">
                                    <div className={cn("admin-notification-icon", getPriorityClass(notification.priority))}>
                                        <Bell size={20} />
                                    </div>
                                    <div className="admin-notification-content">
                                        <div className="admin-notification-header">
                                            <h3 className="admin-notification-title">{notification.title}</h3>
                                            <span className={cn("admin-notification-status", notification.isActive ? "active" : "inactive")}>
                                                {notification.isActive ? 'Active' : 'Inactive'}
                                            </span>
                                        </div>
                                        <p className="admin-notification-message">{notification.message}</p>

                                        <div className="admin-notification-meta">
                                            <div className="admin-meta-item">
                                                <Users size={14} />
                                                <span>{Array.isArray(notification.targetAudience) ? notification.targetAudience.join(', ') : notification.targetAudience}</span>
                                            </div>
                                            <div className="admin-meta-item">
                                                <Clock size={14} />
                                                <span>{new Date(notification.sentAt || notification.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            {notification.readBy && (
                                                <div className="admin-meta-item read">
                                                    <CheckCheck size={14} />
                                                    <span>{notification.readBy.length} read</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="admin-notification-actions">
                                    <button
                                        className="admin-notification-action-btn"
                                        onClick={() => navigate(`/admin/notifications/edit/${notification._id}`)}
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button
                                        className="admin-notification-action-btn delete"
                                        onClick={() => deleteNotification(notification._id)}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NotificationsPage;
