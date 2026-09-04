import React, { useState, useEffect } from 'react';
import { adminAPI } from '../api/admin.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import {
    Users,
    UserCheck,
    Search,
    RefreshCw,
    Calendar,
    CreditCard,
    CheckCircle,
    Clock,
    XCircle,
    AlertTriangle,
    UserMinus,
    Loader
} from 'lucide-react';
import { cn, formatCurrency } from '../utils';
import { motion } from 'framer-motion';
import './Allocations.css';

const AllocationsPage = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [sourceFilter, setSourceFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [stats, setStats] = useState({ total: 0, active: 0, expired: 0, cancelled: 0 });

    // Deallocate modal state
    const [deallocateModal, setDeallocateModal] = useState(false);
    const [selectedAllocation, setSelectedAllocation] = useState(null);
    const [deallocating, setDeallocating] = useState(false);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        loadSubscriptions();
    }, [filter]);

    // Auto-dismiss toast after 4 seconds
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const loadSubscriptions = async () => {
        setLoading(true);
        try {
            const params = filter === 'all' ? {} : { status: filter };
            const res = await adminAPI.getAllSubscriptions(params);
            setSubscriptions(res?.data?.subscriptions || []);
            setStats(res?.data?.stats || { total: 0, active: 0, expired: 0, cancelled: 0 });
        } catch (error) {
            console.error('Failed to load subscriptions', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeallocateClick = (allocation) => {
        setSelectedAllocation(allocation);
        setDeallocateModal(true);
    };

    const handleDeallocateConfirm = async () => {
        if (!selectedAllocation) return;
        setDeallocating(true);
        try {
            await adminAPI.deallocateInstructor(selectedAllocation._id);
            setToast({ type: 'success', message: `Successfully deallocated ${selectedAllocation.member?.name || 'member'} from ${selectedAllocation.instructor?.name || 'instructor'}` });
            setDeallocateModal(false);
            setSelectedAllocation(null);
            loadSubscriptions();
        } catch (error) {
            const msg = error?.response?.data?.message || 'Failed to deallocate instructor';
            setToast({ type: 'error', message: msg });
        } finally {
            setDeallocating(false);
        }
    };

    const handleDeallocateCancel = () => {
        setDeallocateModal(false);
        setSelectedAllocation(null);
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'active': return CheckCircle;
            case 'expired': return Clock;
            case 'cancelled': return XCircle;
            default: return AlertTriangle;
        }
    };

    const filteredSubscriptions = subscriptions.filter(sub => {
        if (sourceFilter !== 'all' && sub.source !== sourceFilter) return false;
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const memberMatch = sub.member?.name?.toLowerCase().includes(query) ||
                sub.member?.email?.toLowerCase().includes(query);
            const instructorMatch = sub.instructor?.name?.toLowerCase().includes(query) ||
                sub.instructor?.email?.toLowerCase().includes(query);
            return memberMatch || instructorMatch;
        }
        return true;
    });

    const formatDate = (date) => {
        if (!date) return 'N/A';
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getDaysRemaining = (expiresAt) => {
        if (!expiresAt) return null;
        const now = new Date();
        const expiry = new Date(expiresAt);
        const diff = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));
        return diff;
    };

    return (
        <div className="admin-allocations-page">
            <div className="admin-page-header">
                <div>
                    <h1 className="admin-page-title">Member Allocations</h1>
                    <p className="admin-page-subtitle">View and manage member-instructor subscriptions and allocations</p>
                </div>
                <Button variant="ghost" icon={RefreshCw} onClick={loadSubscriptions} />
            </div>

            {/* Toast Notification */}
            {toast && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={cn("admin-allocation-toast", toast.type)}
                >
                    {toast.type === 'success' ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
                    <span>{toast.message}</span>
                    <button onClick={() => setToast(null)} className="admin-toast-close">×</button>
                </motion.div>
            )}

            {/* Stats Cards */}
            <div className="admin-allocation-stats-grid">
                <Card className="admin-allocation-stat-card">
                    <div className="admin-allocation-stat-icon total">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="admin-allocation-stat-label">Total Allocations</p>
                        <h3 className="admin-allocation-stat-value">{stats.total}</h3>
                    </div>
                </Card>
                <Card className="admin-allocation-stat-card">
                    <div className="admin-allocation-stat-icon active">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <p className="admin-allocation-stat-label">Active</p>
                        <h3 className="admin-allocation-stat-value">{stats.active}</h3>
                    </div>
                </Card>
                <Card className="admin-allocation-stat-card">
                    <div className="admin-allocation-stat-icon expired">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="admin-allocation-stat-label">Expired</p>
                        <h3 className="admin-allocation-stat-value">{stats.expired}</h3>
                    </div>
                </Card>
                <Card className="admin-allocation-stat-card">
                    <div className="admin-allocation-stat-icon cancelled">
                        <XCircle size={24} />
                    </div>
                    <div>
                        <p className="admin-allocation-stat-label">Cancelled</p>
                        <h3 className="admin-allocation-stat-value">{stats.cancelled}</h3>
                    </div>
                </Card>
            </div>

            {/* Main Content */}
            <Card className="admin-allocations-table-card">
                {/* Filters */}
                <div className="admin-allocations-filters">
                    <div className="admin-filters-row">
                        <div className="admin-status-filters">
                            {['all', 'active', 'expired', 'cancelled'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={cn("admin-filter-btn", filter === f && "active")}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                        <div className="admin-source-filters">
                            <button
                                onClick={() => setSourceFilter('all')}
                                className={cn("admin-source-filter-btn", sourceFilter === 'all' && "active")}
                            >
                                All Sources
                            </button>
                            <button
                                onClick={() => setSourceFilter('allocated')}
                                className={cn("admin-source-filter-btn", sourceFilter === 'allocated' && "active")}
                            >
                                <UserCheck size={14} /> Allocated
                            </button>
                            <button
                                onClick={() => setSourceFilter('subscribed')}
                                className={cn("admin-source-filter-btn", sourceFilter === 'subscribed' && "active")}
                            >
                                <CreditCard size={14} /> Paid
                            </button>
                        </div>
                    </div>
                    <div className="admin-search-container">
                        <Search className="admin-search-icon" size={16} />
                        <input
                            type="text"
                            placeholder="Search by member or instructor..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="admin-search-input"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="admin-table-container">
                    <table className="admin-allocations-table">
                        <thead>
                            <tr>
                                <th>Member</th>
                                <th>Instructor</th>
                                <th>Source</th>
                                <th>Status</th>
                                <th>Started</th>
                                <th>Expires</th>
                                <th>Payment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="8" className="admin-table-loading">
                                        <div className="admin-loading-spinner"></div>
                                    </td>
                                </tr>
                            ) : filteredSubscriptions.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className="admin-table-empty">
                                        <div className="admin-empty-state-icon">
                                            <Users size={24} />
                                        </div>
                                        <p>No allocations found</p>
                                    </td>
                                </tr>
                            ) : (
                                filteredSubscriptions.map((sub) => {
                                    const StatusIcon = getStatusIcon(sub.status);
                                    const daysRemaining = getDaysRemaining(sub.expiresAt);

                                    return (
                                        <motion.tr
                                            key={sub._id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <td>
                                                <div className="admin-allocation-user-cell">
                                                    <div className="admin-allocation-avatar member">
                                                        {sub.member?.name?.[0] || 'M'}
                                                    </div>
                                                    <div>
                                                        <div className="admin-allocation-user-name">{sub.member?.name || 'Unknown'}</div>
                                                        <div className="admin-allocation-user-email">{sub.member?.email || ''}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="admin-allocation-user-cell">
                                                    <div className="admin-allocation-avatar instructor">
                                                        {sub.instructor?.name?.[0] || 'I'}
                                                    </div>
                                                    <div>
                                                        <div className="admin-allocation-user-name">{sub.instructor?.name || 'Unknown'}</div>
                                                        <div className="admin-allocation-user-email">{sub.instructor?.email || ''}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={cn("admin-source-badge", sub.source)}>
                                                    {sub.source === 'allocated' ? (
                                                        <><UserCheck size={12} /> Admin Allocated</>
                                                    ) : (
                                                        <><CreditCard size={12} /> Paid Subscription</>
                                                    )}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={cn("admin-allocation-status-badge", sub.status)}>
                                                    <StatusIcon size={12} />
                                                    {sub.status}
                                                </span>
                                            </td>
                                            <td className="admin-allocation-date">
                                                <Calendar size={14} />
                                                {formatDate(sub.subscribedAt)}
                                            </td>
                                            <td className="admin-allocation-date">
                                                <div className="admin-expiry-info">
                                                    <span>{formatDate(sub.expiresAt)}</span>
                                                    {sub.status === 'active' && daysRemaining !== null && (
                                                        <span className={cn(
                                                            "admin-days-remaining",
                                                            daysRemaining <= 7 ? "warning" : "normal"
                                                        )}>
                                                            {daysRemaining > 0 ? `${daysRemaining}d left` : 'Expiring today'}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td>
                                                {sub.payment ? (
                                                    <div className="admin-payment-info">
                                                        <span className="admin-payment-amount">
                                                            {formatCurrency(sub.payment.amount)}
                                                        </span>
                                                        <span className={cn(
                                                            "admin-payment-status",
                                                            sub.payment.status === 'completed' ? 'completed' : 'pending'
                                                        )}>
                                                            {sub.payment.status}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <span className="admin-no-payment">Free allocation</span>
                                                )}
                                            </td>
                                            <td>
                                                {sub.status === 'active' ? (
                                                    <button
                                                        className="admin-deallocate-btn"
                                                        onClick={() => handleDeallocateClick(sub)}
                                                        title="Deallocate this instructor from member"
                                                    >
                                                        <UserMinus size={14} />
                                                        Deallocate
                                                    </button>
                                                ) : (
                                                    <span className="admin-no-action">—</span>
                                                )}
                                            </td>
                                        </motion.tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Deallocate Confirmation Modal */}
            <Modal
                isOpen={deallocateModal}
                onClose={handleDeallocateCancel}
                title="Confirm Deallocation"
                className="admin-deallocate-modal"
            >
                <div className="admin-deallocate-modal-body">
                    <div className="admin-deallocate-warning-icon">
                        <AlertTriangle size={32} />
                    </div>
                    <p className="admin-deallocate-message">
                        Are you sure you want to deallocate this instructor from the member?
                    </p>
                    {selectedAllocation && (
                        <div className="admin-deallocate-details">
                            <div className="admin-deallocate-detail-row">
                                <span className="admin-deallocate-detail-label">Member</span>
                                <span className="admin-deallocate-detail-value">
                                    {selectedAllocation.member?.name || 'Unknown'}
                                </span>
                            </div>
                            <div className="admin-deallocate-detail-row">
                                <span className="admin-deallocate-detail-label">Instructor</span>
                                <span className="admin-deallocate-detail-value">
                                    {selectedAllocation.instructor?.name || 'Unknown'}
                                </span>
                            </div>
                            <div className="admin-deallocate-detail-row">
                                <span className="admin-deallocate-detail-label">Type</span>
                                <span className={cn("admin-source-badge", selectedAllocation.source)}>
                                    {selectedAllocation.source === 'allocated' ? 'Free Allocation' : 'Paid Subscription'}
                                </span>
                            </div>
                        </div>
                    )}
                    <p className="admin-deallocate-note">
                        This action will cancel the active assignment. The member will no longer be assigned to this instructor.
                    </p>
                    <div className="admin-deallocate-actions">
                        <button
                            className="admin-deallocate-cancel-btn"
                            onClick={handleDeallocateCancel}
                            disabled={deallocating}
                        >
                            Cancel
                        </button>
                        <button
                            className="admin-deallocate-confirm-btn"
                            onClick={handleDeallocateConfirm}
                            disabled={deallocating}
                        >
                            {deallocating ? (
                                <>
                                    <Loader size={14} className="admin-deallocate-spinner" />
                                    Deallocating...
                                </>
                            ) : (
                                <>
                                    <UserMinus size={14} />
                                    Deallocate
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AllocationsPage;
