import React, { useState, useEffect } from 'react';
import { adminAPI } from '../api/admin.api';
import Card from '../components/common/Card';
import {
    Users,
    CheckCircle,
    CreditCard,
    Dumbbell,
    TrendingUp,
    Activity,
    Bell,
    Clock
} from 'lucide-react';
import { formatCurrency, cn } from '../utils';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const StatCard = ({ title, value, icon: Icon, color, change }) => (
    <Card className="admin-stat-card">
        <div className="admin-stat-card-content">
            <div>
                <p className="admin-stat-card-title">{title}</p>
                <h3 className="admin-stat-card-value">{value}</h3>
                {change && (
                    <div className="admin-stat-card-change">
                        <TrendingUp size={12} />
                        {change}
                    </div>
                )}
            </div>
            <div
                className="admin-stat-icon-wrapper"
                style={{
                    background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
                    borderColor: `${color}30`
                }}
            >
                <Icon size={24} style={{ color }} />
            </div>
        </div>
    </Card>
);

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await adminAPI.getDashboardStats();
                setData(res?.data);
            } catch (error) {
                console.error('Failed to load dashboard', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="admin-loading">
                <div className="admin-loading-spinner"></div>
            </div>
        );
    }

    const stats = data?.stats || {};
    const recentActivity = data?.recentActivity || [];

    const quickActions = [
        { label: 'Add User', icon: Users, to: '/admin/users' },
        { label: 'Payments', icon: CreditCard, to: '/admin/payments' },
        { label: 'Exercises', icon: Dumbbell, to: '/admin/exercises' },
        { label: 'Analytics', icon: TrendingUp, to: '/admin/analytics' },
    ];

    return (
        <div className="admin-dashboard">
            {/* Header */}
            <div className="admin-dashboard-header">
                <div>
                    <h1 className="admin-dashboard-title">Dashboard Overview</h1>
                    <p className="admin-dashboard-subtitle">Welcome back, here's what's happening today.</p>
                </div>
                <Link to="/admin/notifications" className="admin-notification-btn">
                    <Bell size={16} />
                    <span>Notifications</span>
                    <span className="admin-notification-badge">3</span>
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="admin-stats-grid">
                <StatCard
                    title="Total Members"
                    value={stats.totalMembers?.toLocaleString() ?? 0}
                    icon={Users}
                    color="#00D4FF"
                    change="+12.5%"
                />
                <StatCard
                    title="Active Today"
                    value={stats.activeToday?.toLocaleString() ?? 0}
                    icon={CheckCircle}
                    color="#39FF14"
                    change="+8.2%"
                />
                <StatCard
                    title="Monthly Revenue"
                    value={formatCurrency(stats.monthlyRevenue ?? 0)}
                    icon={CreditCard}
                    color="#C8A882"
                    change={stats.revenueChange ? `${stats.revenueChange > 0 ? '+' : ''}${stats.revenueChange.toFixed(1)}%` : '0%'}
                />
                <StatCard
                    title="Instructors"
                    value={stats.instructors?.toLocaleString() ?? 0}
                    icon={Dumbbell}
                    color="#F59E0B"
                    change="+2"
                />
            </div>

            {/* Content Grid */}
            <div className="admin-content-grid">
                {/* Recent Activity */}
                <div className="admin-section">
                    <h2 className="admin-section-title">Recent Activity</h2>
                    <div className="admin-activity-card">
                        {recentActivity.length > 0 ? (
                            <div>
                                {recentActivity.map((activity, idx) => (
                                    <div key={idx} className="admin-activity-item">
                                        <div
                                            className="admin-activity-icon"
                                            style={{ background: `${activity.color || '#00D4FF'}15` }}
                                        >
                                            <Activity size={18} style={{ color: activity.color || '#00D4FF' }} />
                                        </div>
                                        <div className="admin-activity-info">
                                            <p className="admin-activity-name">{activity.name}</p>
                                            <p className="admin-activity-type">{activity.type}</p>
                                        </div>
                                        <div className="admin-activity-time">
                                            <Clock size={12} />
                                            {activity.time}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="admin-empty-state">
                                <Clock className="admin-empty-icon" />
                                <p>No recent activity</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* System Status & Quick Actions */}
                <div className="admin-section">
                    <h2 className="admin-section-title">System Status</h2>
                    <Card>
                        <div className="admin-status-header">
                            <div className="admin-status-indicator">
                                <div className="admin-status-dot"></div>
                                <span>Operational</span>
                            </div>
                            <CheckCircle size={20} style={{ color: '#39FF14' }} />
                        </div>
                        <div className="admin-status-list">
                            <div className="admin-status-item">
                                <span className="admin-status-label">Server Uptime</span>
                                <span className="admin-status-value">99.9%</span>
                            </div>
                            <div className="admin-status-item">
                                <span className="admin-status-label">Database</span>
                                <span className="admin-status-value healthy">Healthy</span>
                            </div>
                            <div className="admin-status-item">
                                <span className="admin-status-label">Latency</span>
                                <span className="admin-status-value">120ms</span>
                            </div>
                        </div>
                    </Card>

                    <h2 className="admin-section-title" style={{ marginTop: '1.5rem' }}>Quick Actions</h2>
                    <div className="admin-quick-actions-grid">
                        {quickActions.map((action, idx) => (
                            <Link
                                key={idx}
                                to={action.to}
                                className="admin-quick-action-card"
                            >
                                <action.icon className="admin-quick-action-icon" size={24} />
                                <span className="admin-quick-action-label">{action.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
