import React, { useState, useEffect } from 'react';
import { adminAPI } from '../api/admin.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
    CreditCard,
    Download,
    RefreshCw,
    Search,
    CheckCircle,
    Clock,
    XCircle,
} from 'lucide-react';
import { cn, formatCurrency } from '../utils';
import './Payments.css';

const PaymentsPage = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0, failed: 0 });

    useEffect(() => {
        loadPayments();
    }, [filter]);

    const loadPayments = async () => {
        setLoading(true);
        try {
            const params = filter === 'all' ? undefined : { status: filter };
            const res = await adminAPI.getAllPayments(params);
            setPayments(res?.data?.payments || []);
            setStats(res?.data?.stats || { total: 0, pending: 0, completed: 0, failed: 0 });
        } catch (error) {
            console.error('Failed to load payments', error);
        } finally {
            setLoading(false);
        }
    };

    const StatusBadge = ({ status }) => {
        const icons = {
            completed: CheckCircle,
            pending: Clock,
            failed: XCircle
        };
        const Icon = icons[status] || Clock;

        return (
            <span className={cn("admin-payment-status-badge", status)}>
                <Icon size={12} />
                <span>{status}</span>
            </span>
        );
    };

    return (
        <div className="admin-payments-page">
            <div className="admin-page-header">
                <div>
                    <h1 className="admin-page-title">Payment Management</h1>
                    <p className="admin-page-subtitle">Monitor and manage all payment transactions</p>
                </div>
                <div className="admin-header-actions">
                    <Button variant="outline" icon={Download}>Export Report</Button>
                    <Button variant="ghost" icon={RefreshCw} onClick={loadPayments} />
                </div>
            </div>

            {/* Stats Cards */}
            <div className="admin-payment-stats-grid">
                <Card className="admin-payment-stat-card">
                    <div className="admin-payment-stat-icon total">
                        <CreditCard size={24} />
                    </div>
                    <div>
                        <p className="admin-payment-stat-label">Total Revenue</p>
                        <h3 className="admin-payment-stat-value">{formatCurrency(stats.total)}</h3>
                    </div>
                </Card>
                <Card className="admin-payment-stat-card">
                    <div className="admin-payment-stat-icon completed">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <p className="admin-payment-stat-label">Completed</p>
                        <h3 className="admin-payment-stat-value">{formatCurrency(stats.completed)}</h3>
                    </div>
                </Card>
                <Card className="admin-payment-stat-card">
                    <div className="admin-payment-stat-icon pending">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="admin-payment-stat-label">Pending</p>
                        <h3 className="admin-payment-stat-value">{formatCurrency(stats.pending)}</h3>
                    </div>
                </Card>
            </div>

            {/* Main Content */}
            <Card className="admin-payments-table-card">
                {/* Filters */}
                <div className="admin-payments-filters">
                    <div className="admin-status-filters">
                        {['all', 'completed', 'pending', 'failed'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={cn("admin-filter-btn", filter === f && "active")}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="admin-search-container">
                        <Search className="admin-search-icon" size={16} />
                        <input
                            type="text"
                            placeholder="Search transaction..."
                            className="admin-search-input"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="admin-table-container">
                    <table className="admin-payments-table">
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>User</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="6" className="admin-table-loading">
                                        <div className="admin-loading-spinner"></div>
                                    </td>
                                </tr>
                            ) : payments.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="admin-table-empty">
                                        <div className="admin-empty-state-icon">
                                            <CreditCard size={24} />
                                        </div>
                                        <p>No transactions found</p>
                                    </td>
                                </tr>
                            ) : (
                                payments.map((payment) => (
                                    <tr key={payment._id || payment.id}>
                                        <td className="admin-transaction-id">
                                            #{payment.transactionId || payment._id?.slice(-8).toUpperCase()}
                                        </td>
                                        <td>
                                            <div className="admin-payment-user-name">{payment.member || 'Unknown User'}</div>
                                            <div className="admin-payment-user-email">{payment.email || 'No email'}</div>
                                        </td>
                                        <td className="admin-payment-amount">
                                            {formatCurrency(payment.amount)}
                                        </td>
                                        <td>
                                            <StatusBadge status={payment.status} />
                                        </td>
                                        <td className="admin-payment-date">
                                            {new Date(payment.date || payment.createdAt).toLocaleDateString()}
                                        </td>
                                        <td>
                                            <span className="admin-payment-type-badge">
                                                {payment.type}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default PaymentsPage;
