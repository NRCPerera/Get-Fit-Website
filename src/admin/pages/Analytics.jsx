import React, { useState, useEffect } from 'react';
import { adminAPI } from '../api/admin.api';
import Card from '../components/common/Card';
import {
    Users,
    CheckCircle,
    CreditCard,
    UserPlus,
    TrendingUp,
    Activity,
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { formatCurrency } from '../utils';
import './Analytics.css';

const Analytics = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAnalytics = async () => {
            try {
                const res = await adminAPI.getAnalytics();
                setData(res?.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadAnalytics();
    }, []);

    if (loading) {
        return (
            <div className="admin-loading">
                <div className="admin-loading-spinner"></div>
            </div>
        );
    }

    const stats = data?.stats || {};
    const trends = data?.trends || [];
    const topActivities = data?.topActivities || [];

    return (
        <div className="admin-analytics-page">
            <div className="admin-page-header">
                <div>
                    <h1 className="admin-page-title">Analytics Dashboard</h1>
                    <p className="admin-page-subtitle">Comprehensive system insights and metrics</p>
                </div>
            </div>

            {/* Hero Stats */}
            <div className="admin-analytics-hero-grid">
                <Card className="admin-analytics-hero-card">
                    <div className="admin-hero-content">
                        <div>
                            <p className="admin-hero-label">Total Members</p>
                            <h3 className="admin-hero-value">{stats.totalMembers?.toLocaleString() || 0}</h3>
                            <div className="admin-hero-trend positive">
                                <TrendingUp size={12} />
                                <span>+12.5%</span>
                            </div>
                        </div>
                        <div className="admin-hero-icon-wrapper primary">
                            <Users size={24} />
                        </div>
                    </div>
                </Card>

                <Card className="admin-analytics-hero-card">
                    <div className="admin-hero-content">
                        <div>
                            <p className="admin-hero-label">Active Members</p>
                            <h3 className="admin-hero-value">{stats.activeMembers?.toLocaleString() || 0}</h3>
                            <div className="admin-hero-trend positive">
                                <TrendingUp size={12} />
                                <span>+8.2%</span>
                            </div>
                        </div>
                        <div className="admin-hero-icon-wrapper success">
                            <CheckCircle size={24} />
                        </div>
                    </div>
                </Card>

                <Card className="admin-analytics-hero-card">
                    <div className="admin-hero-content">
                        <div>
                            <p className="admin-hero-label">Monthly Revenue</p>
                            <h3 className="admin-hero-value">{formatCurrency(stats.monthlyRevenue || 0)}</h3>
                            <div className="admin-hero-trend positive">
                                <TrendingUp size={12} />
                                <span>+5.4%</span>
                            </div>
                        </div>
                        <div className="admin-hero-icon-wrapper revenue">
                            <CreditCard size={24} />
                        </div>
                    </div>
                </Card>

                <Card className="admin-analytics-hero-card">
                    <div className="admin-hero-content">
                        <div>
                            <p className="admin-hero-label">New Sign-ups</p>
                            <h3 className="admin-hero-value">{stats.newSignups?.toLocaleString() || 0}</h3>
                            <div className="admin-hero-trend positive">
                                <TrendingUp size={12} />
                                <span>+15%</span>
                            </div>
                        </div>
                        <div className="admin-hero-icon-wrapper warning">
                            <UserPlus size={24} />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Charts Section */}
            <div className="admin-analytics-charts-grid">
                <Card className="admin-analytics-chart-card">
                    <div className="admin-chart-header">
                        <h2 className="admin-chart-title">Revenue & Membership Trends</h2>
                        <select className="admin-chart-select">
                            <option>Last 6 Months</option>
                            <option>Last 30 Days</option>
                            <option>Yearly</option>
                        </select>
                    </div>

                    <div className="admin-chart-container">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={trends}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#00D4FF" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#39FF14" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="period" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: 'rgba(30,30,30,0.95)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                                    }}
                                    labelStyle={{ color: '#ffffff' }}
                                    itemStyle={{ color: 'rgba(255,255,255,0.8)' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#00D4FF" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                                <Area type="monotone" dataKey="members" stroke="#39FF14" strokeWidth={3} fillOpacity={1} fill="url(#colorMembers)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <div className="admin-analytics-side">
                    <Card>
                        <div className="admin-chart-header">
                            <h2 className="admin-chart-title">Popular Activities</h2>
                            <p className="admin-chart-subtitle">Based on check-ins</p>
                        </div>

                        <div className="admin-activities-list">
                            {topActivities.map((activity, idx) => (
                                <div key={idx} className="admin-activity-item">
                                    <div className="admin-activity-header">
                                        <span className="admin-activity-name">{activity.name}</span>
                                        <span className="admin-activity-percent">{activity.percentage}%</span>
                                    </div>
                                    <div className="admin-progress-track">
                                        <div
                                            className="admin-progress-fill"
                                            style={{ width: `${activity.percentage}%` }}
                                        />
                                    </div>
                                    <p className="admin-activity-meta">{activity.participants} active participants</p>
                                </div>
                            ))}
                            {topActivities.length === 0 && (
                                <div className="admin-chart-empty">No activity data</div>
                            )}
                        </div>
                    </Card>

                    <Card className="admin-insight-card">
                        <div className="admin-insight-header">
                            <div className="admin-insight-icon">
                                <Activity size={20} />
                            </div>
                            <div>
                                <h3>Key Insight</h3>
                                <p>AI Generated</p>
                            </div>
                        </div>
                        <p className="admin-insight-text">
                            Peak hours are consistently 6-8 AM and 5-7 PM. Consider adding more instructors during these slots to optimize member satisfaction.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
