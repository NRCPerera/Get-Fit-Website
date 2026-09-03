/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { adminAPI } from '../api/admin.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import {
    Filter,
    UserPlus,
    Mail,
    Ban,
    Trash2,
    UserCheck,
    CheckCircle,
    Search,
    Eye,
    Edit
} from 'lucide-react';
import { cn } from '../utils';
import { motion } from 'framer-motion';
import './Users.css';

const getApiErrorMessage = (error, fallbackMessage) => {
    const responseData = error?.response?.data;

    if (!responseData) {
        return error?.message || fallbackMessage;
    }

    if (typeof responseData === 'string') {
        return responseData;
    }

    return (
        responseData.message ||
        responseData.error?.message ||
        responseData.error ||
        responseData.errors?.[0]?.message ||
        error?.message ||
        fallbackMessage
    );
};

const UsersPage = () => {
    const [activeTab, setActiveTab] = useState('users');
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const [allocationModalOpen, setAllocationModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [selectedInstructorId, setSelectedInstructorId] = useState('');
    const [allocating, setAllocating] = useState(false);

    const [createInstructorModalOpen, setCreateInstructorModalOpen] = useState(false);
    const [creatingInstructor, setCreatingInstructor] = useState(false);
    const [instructorForm, setInstructorForm] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        monthlyRate: '',
        experience: '',
        bio: '',
        specializations: []
    });

    const [editInstructorModalOpen, setEditInstructorModalOpen] = useState(false);
    const [updatingInstructor, setUpdatingInstructor] = useState(false);
    const [editInstructorId, setEditInstructorId] = useState(null);
    const [editInstructorForm, setEditInstructorForm] = useState({
        name: '',
        email: '',
        phone: '',
        monthlyRate: '',
        experience: '',
        bio: '',
        specializations: [],
        isAvailable: true
    });

    const [userDetailsModalOpen, setUserDetailsModalOpen] = useState(false);
    const [selectedUserDetails, setSelectedUserDetails] = useState(null);
    const [loadingUserDetails, setLoadingUserDetails] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            if (activeTab === 'users') {
                const res = await adminAPI.getAllUsers({ status: filter === 'all' ? undefined : filter });
                setUsers(res?.data?.users || []);
            } else {
                const res = await adminAPI.getAllInstructors();
                setInstructors(res?.data?.items || []);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [activeTab, filter]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const getRoleBadgeClass = (role) => {
        switch (role?.toLowerCase()) {
            case 'admin': return 'admin-role-badge-admin';
            case 'instructor': return 'admin-role-badge-instructor';
            case 'member': return 'admin-role-badge-member';
            default: return 'admin-role-badge-default';
        }
    };

    const handleAllocateClick = async (user) => {
        setSelectedMember(user);
        setAllocationModalOpen(true);
        if (instructors.length === 0) {
            try {
                const res = await adminAPI.getAllInstructors();
                setInstructors(res?.data?.items || []);
            } catch (error) {
                console.error("Failed to load instructors", error);
            }
        }
    };

    const handleAllocateSubmit = async () => {
        if (!selectedMember || !selectedInstructorId) return;
        setAllocating(true);
        try {
            await adminAPI.allocateInstructor({
                memberId: selectedMember.id || selectedMember._id,
                instructorId: selectedInstructorId
            });
            alert('Instructor allocated successfully!');
            setAllocationModalOpen(false);
            setSelectedMember(null);
            setSelectedInstructorId('');
        } catch (error) {
            console.error(error);
            alert(getApiErrorMessage(error, 'Failed to allocate instructor'));
        } finally {
            setAllocating(false);
        }
    };

    const handleSuspendUser = async (userId) => {
        if (!window.confirm('Are you sure you want to suspend this user?')) return;
        try {
            await adminAPI.suspendUser(userId);
            setUsers(prev => prev.map(u =>
                (u.id === userId || u._id === userId) ? { ...u, status: 'inactive' } : u
            ));
            alert('User suspended successfully');
        } catch (error) {
            console.error(error);
            alert(getApiErrorMessage(error, 'Failed to suspend user'));
        }
    };

    const handleActivateUser = async (userId) => {
        try {
            await adminAPI.activateUser(userId);
            setUsers(prev => prev.map(u =>
                (u.id === userId || u._id === userId) ? { ...u, status: 'active' } : u
            ));
            alert('User activated successfully');
        } catch (error) {
            console.error(error);
            alert(getApiErrorMessage(error, 'Failed to activate user'));
        }
    };

    const handleViewUserDetails = async (userId) => {
        setLoadingUserDetails(true);
        setUserDetailsModalOpen(true);
        try {
            const res = await adminAPI.getUserDetails(userId);
            setSelectedUserDetails(res?.data?.user);
        } catch (error) {
            console.error(error);
            alert('Failed to load user details');
            setUserDetailsModalOpen(false);
        } finally {
            setLoadingUserDetails(false);
        }
    };

    const handleApproveInstructor = async (userId) => {
        try {
            await adminAPI.approveInstructor(userId);
            setInstructors(prev => prev.map(i =>
                (i.userId === userId || i.user?._id === userId) ? { ...i, isAvailable: true } : i
            ));
            alert('Instructor approved successfully');
        } catch (error) {
            console.error(error);
            alert(getApiErrorMessage(error, 'Failed to approve instructor'));
        }
    };

    const handleCreateInstructor = async (e) => {
        e.preventDefault();

        const normalizedName = instructorForm.name.trim();
        const normalizedEmail = instructorForm.email.trim().toLowerCase();
        const normalizedPassword = instructorForm.password.trim();
        const normalizedPhone = instructorForm.phone.trim();
        const normalizedBio = instructorForm.bio.trim();
        const parsedMonthlyRate = Number(instructorForm.monthlyRate);
        const parsedExperience = Number.parseInt(instructorForm.experience, 10);

        if (!normalizedName || !normalizedEmail || !normalizedPassword) {
            alert('Name, email, and password are required');
            return;
        }

        // Backend treats 0 as missing; enforce a positive monthly rate on the client.
        if (!Number.isFinite(parsedMonthlyRate) || parsedMonthlyRate <= 0) {
            alert('Monthly rate must be greater than 0');
            return;
        }

        setCreatingInstructor(true);
        try {
            await adminAPI.createInstructor({
                name: normalizedName,
                email: normalizedEmail,
                password: normalizedPassword,
                phone: normalizedPhone,
                monthlyRate: parsedMonthlyRate,
                experience: Number.isFinite(parsedExperience) ? Math.max(0, parsedExperience) : 0,
                bio: normalizedBio,
                specializations: instructorForm.specializations.filter(Boolean)
            });
            alert('Instructor created successfully!');
            setCreateInstructorModalOpen(false);
            setInstructorForm({
                name: '',
                email: '',
                password: '',
                phone: '',
                monthlyRate: '',
                experience: '',
                bio: '',
                specializations: []
            });
            fetchData();
        } catch (error) {
            console.error(error);
            alert(getApiErrorMessage(error, 'Failed to create instructor'));
        } finally {
            setCreatingInstructor(false);
        }
    };

    const handleInstructorFormChange = (e) => {
        const { name, value } = e.target;
        setInstructorForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSpecializationAdd = (spec) => {
        if (spec && !instructorForm.specializations.includes(spec)) {
            setInstructorForm(prev => ({
                ...prev,
                specializations: [...prev.specializations, spec]
            }));
        }
    };

    const handleSpecializationRemove = (spec) => {
        setInstructorForm(prev => ({
            ...prev,
            specializations: prev.specializations.filter(s => s !== spec)
        }));
    };

    const handleEditInstructorClick = (instructor) => {
        setEditInstructorId(instructor._id);
        setEditInstructorForm({
            name: instructor.user?.name || '',
            email: instructor.user?.email || '',
            phone: instructor.user?.phone || '',
            monthlyRate: instructor.monthlyRate || '',
            experience: instructor.experience || '',
            bio: instructor.bio || '',
            specializations: instructor.specializations || [],
            isAvailable: instructor.isAvailable !== undefined ? instructor.isAvailable : true
        });
        setEditInstructorModalOpen(true);
    };

    const handleEditInstructorFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditInstructorForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleEditSpecializationAdd = (spec) => {
        if (spec && !editInstructorForm.specializations.includes(spec)) {
            setEditInstructorForm(prev => ({
                ...prev,
                specializations: [...prev.specializations, spec]
            }));
        }
    };

    const handleEditSpecializationRemove = (spec) => {
        setEditInstructorForm(prev => ({
            ...prev,
            specializations: prev.specializations.filter(s => s !== spec)
        }));
    };

    const handleUpdateInstructor = async (e) => {
        e.preventDefault();
        if (!editInstructorId) return;

        const parsedMonthlyRate = Number(editInstructorForm.monthlyRate);
        const parsedExperience = Number.parseInt(editInstructorForm.experience, 10);

        if (!editInstructorForm.name.trim() || !editInstructorForm.email.trim()) {
            alert('Name and email are required');
            return;
        }

        if (!Number.isFinite(parsedMonthlyRate) || parsedMonthlyRate <= 0) {
            alert('Monthly rate must be greater than 0');
            return;
        }

        setUpdatingInstructor(true);
        try {
            await adminAPI.updateInstructor(editInstructorId, {
                name: editInstructorForm.name.trim(),
                email: editInstructorForm.email.trim().toLowerCase(),
                phone: editInstructorForm.phone.trim(),
                monthlyRate: parsedMonthlyRate,
                experience: Number.isFinite(parsedExperience) ? Math.max(0, parsedExperience) : 0,
                bio: editInstructorForm.bio.trim(),
                specializations: editInstructorForm.specializations.filter(Boolean),
                isAvailable: editInstructorForm.isAvailable
            });
            alert('Instructor updated successfully!');
            setEditInstructorModalOpen(false);
            setEditInstructorId(null);
            fetchData();
        } catch (error) {
            console.error(error);
            alert(getApiErrorMessage(error, 'Failed to update instructor'));
        } finally {
            setUpdatingInstructor(false);
        }
    };

    const filteredUsers = users.filter(user =>
        searchQuery === '' ||
        user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const specializationOptions = ['weight-loss', 'muscle-gain', 'cardio', 'yoga', 'crossfit', 'powerlifting', 'rehabilitation', 'sports-specific'];

    const UserTable = ({ data }) => (
        <div className="admin-user-table-container">
            <table className="admin-user-table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                        <th>Allocation</th>
                        <th>Status</th>
                        <th>Joined</th>
                        <th className="text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id || user._id}>
                            <td>
                                <div className="admin-user-cell">
                                    <div className="admin-user-avatar">
                                        {user.name?.[0] || 'U'}
                                    </div>
                                    <div className="admin-user-info">
                                        <div className="admin-user-name">{user.name}</div>
                                        <div className="admin-user-email">{user.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className={cn("admin-role-badge", getRoleBadgeClass(user.role))}>
                                    {user.role}
                                </span>
                            </td>
                            <td>
                                {user.role === 'Member' ? (
                                    user.allocation?.isAllocated ? (
                                        <div className="admin-allocation-info">
                                            <span className={cn(
                                                "admin-allocation-badge",
                                                user.allocation.source === 'subscribed' ? "subscribed" : "allocated"
                                            )}>
                                                <UserCheck size={12} />
                                                {user.allocation.source === 'subscribed' ? 'Subscribed' : 'Allocated'}
                                            </span>
                                            <span className="admin-allocation-instructor">
                                                to {user.allocation.instructorName}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="admin-allocation-badge not-allocated">
                                            Not allocated
                                        </span>
                                    )
                                ) : (
                                    <span className="admin-table-dash">—</span>
                                )}
                            </td>
                            <td>
                                <div className="admin-status-badge">
                                    <div className={cn("admin-status-dot", user.status === 'active' ? 'active' : 'inactive')} />
                                    <span>{user.status}</span>
                                </div>
                            </td>
                            <td className="admin-table-date">
                                {new Date(user.joinDate || user.createdAt).toLocaleDateString()}
                            </td>
                            <td>
                                <div className="admin-action-buttons">
                                    <button
                                        className="admin-action-btn"
                                        title="View Details"
                                        onClick={() => handleViewUserDetails(user.id || user._id)}
                                    >
                                        <Eye size={16} />
                                    </button>
                                    {user.role === 'Member' && !user.allocation?.isAllocated && (
                                        <button
                                            className="admin-action-btn"
                                            title="Allocate Instructor"
                                            onClick={() => handleAllocateClick(user)}
                                        >
                                            <UserCheck size={16} />
                                        </button>
                                    )}
                                    <button className="admin-action-btn" title="Email">
                                        <Mail size={16} />
                                    </button>
                                    {user.status === 'active' ? (
                                        <button
                                            className="admin-action-btn delete"
                                            title="Suspend"
                                            onClick={() => handleSuspendUser(user.id || user._id)}
                                        >
                                            <Ban size={16} />
                                        </button>
                                    ) : (
                                        <button
                                            className="admin-action-btn success"
                                            title="Activate"
                                            onClick={() => handleActivateUser(user.id || user._id)}
                                        >
                                            <CheckCircle size={16} />
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                    {data.length === 0 && (
                        <tr>
                            <td colSpan={6} className="admin-table-empty">
                                No users found matching filters.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );

    const InstructorGrid = ({ data }) => (
        <div className="admin-instructor-grid">
            {data.map((instructor) => (
                <Card key={instructor._id} className="admin-instructor-card">
                    <div className="admin-instructor-header">
                        <div className="admin-instructor-profile">
                            <div className="admin-instructor-avatar">
                                {instructor.user?.name?.[0] || 'I'}
                            </div>
                            <div>
                                <h4 className="admin-instructor-name">{instructor.user?.name}</h4>
                                <p className="admin-instructor-email">{instructor.user?.email}</p>
                            </div>
                        </div>
                        <div className={cn("admin-instructor-availability", instructor.isAvailable ? "available" : "unavailable")}>
                            {instructor.isAvailable ? 'Available' : 'Pending'}
                        </div>
                    </div>

                    <div className="admin-instructor-details">
                        <div className="admin-instructor-specializations">
                            {instructor.specializations?.map((spec, i) => (
                                <span key={i} className="admin-specialization-tag">
                                    {spec}
                                </span>
                            ))}
                        </div>

                        <div className="admin-instructor-stats">
                            <div className="admin-instructor-stat">
                                <p className="admin-stat-label">Rate</p>
                                <p className="admin-stat-value">LKR {instructor.monthlyRate}</p>
                            </div>
                            <div className="admin-instructor-stat">
                                <p className="admin-stat-label">Experience</p>
                                <p className="admin-stat-value">{instructor.experience} Years</p>
                            </div>
                        </div>

                        {instructor.bio && (
                            <p className="admin-instructor-bio">{instructor.bio}</p>
                        )}
                    </div>

                    <div className="admin-instructor-actions">
                        {!instructor.isAvailable && (
                            <Button
                                variant="primary"
                                size="sm"
                                fullWidth
                                onClick={() => handleApproveInstructor(instructor.user?._id || instructor.userId)}
                            >
                                Approve
                            </Button>
                        )}
                        <Button variant="outline" size="sm" fullWidth icon={Edit} onClick={() => handleEditInstructorClick(instructor)}>Edit Profile</Button>
                        <Button variant="ghost" size="sm" className="admin-delete-btn">
                            <Trash2 size={16} />
                        </Button>
                    </div>
                </Card>
            ))}
            <Card
                className="admin-add-instructor-card"
                onClick={() => setCreateInstructorModalOpen(true)}
            >
                <div className="admin-add-icon-wrapper">
                    <UserPlus size={24} />
                </div>
                <h3>Add Instructor</h3>
                <p>Register a new instructor</p>
            </Card>
        </div>
    );

    return (
        <div className="admin-users-page">
            <div className="admin-page-header">
                <div>
                    <h1 className="admin-page-title">User Management</h1>
                    <p className="admin-page-subtitle">Manage users, badging, and permissions</p>
                </div>
                <div className="admin-header-actions">
                    <div className="admin-search-container">
                        <Search className="admin-search-icon" size={16} />
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="admin-search-input"
                        />
                    </div>
                    <Button variant="secondary" icon={Filter} className="admin-hide-mobile">Filter</Button>
                    <Button icon={UserPlus} onClick={() => setCreateInstructorModalOpen(true)}>Add Instructor</Button>
                </div>
            </div>

            <div className="admin-tabs-container">
                <button
                    onClick={() => setActiveTab('users')}
                    className={cn("admin-tab-button", activeTab === 'users' && "active")}
                >
                    All Users
                    {activeTab === 'users' && <motion.div layoutId="tab" className="admin-tab-indicator" />}
                </button>
                <button
                    onClick={() => setActiveTab('instructors')}
                    className={cn("admin-tab-button", activeTab === 'instructors' && "active")}
                >
                    Instructors
                    {activeTab === 'instructors' && <motion.div layoutId="tab" className="admin-tab-indicator" />}
                </button>
            </div>

            {activeTab === 'users' && (
                <div className="admin-filter-pills">
                    {['all', 'active', 'inactive'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn("admin-filter-pill", filter === f && "active")}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>
            )}

            <div className="admin-content-area">
                {loading ? (
                    <div className="admin-loading">
                        <div className="admin-loading-spinner"></div>
                    </div>
                ) : (
                    activeTab === 'users' ? <UserTable data={filteredUsers} /> : <InstructorGrid data={instructors} />
                )}
            </div>

            {/* Allocation Modal */}
            <Modal
                isOpen={allocationModalOpen}
                onClose={() => setAllocationModalOpen(false)}
                title="Allocate Instructor"
            >
                <div className="admin-modal-form">
                    <div className="admin-modal-info">
                        <p>
                            Assigning instructor to <strong>{selectedMember?.name}</strong>.
                            This will create an active subscription without payment.
                        </p>
                    </div>

                    <div className="admin-form-group">
                        <label>Select Instructor</label>
                        <select
                            value={selectedInstructorId}
                            onChange={(e) => setSelectedInstructorId(e.target.value)}
                            className="admin-select"
                        >
                            <option value="">-- Choose Instructor --</option>
                            {instructors.filter(i => i.isAvailable).map((inst) => (
                                <option key={inst.user?._id || inst._id} value={inst.user?._id}>
                                    {inst.user?.name} ({inst.specializations?.join(', ')})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="admin-modal-actions">
                        <Button variant="secondary" onClick={() => setAllocationModalOpen(false)}>Cancel</Button>
                        <Button
                            onClick={handleAllocateSubmit}
                            disabled={!selectedInstructorId || allocating}
                        >
                            {allocating ? 'Allocating...' : 'Allocate'}
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* Create Instructor Modal */}
            <Modal
                isOpen={createInstructorModalOpen}
                onClose={() => setCreateInstructorModalOpen(false)}
                title="Create New Instructor"
            >
                <form onSubmit={handleCreateInstructor} className="admin-modal-form">
                    <div className="admin-form-grid">
                        <div className="admin-form-group">
                            <label>Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={instructorForm.name}
                                onChange={handleInstructorFormChange}
                                className="admin-form-input"
                                required
                            />
                        </div>
                        <div className="admin-form-group">
                            <label>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={instructorForm.email}
                                onChange={handleInstructorFormChange}
                                className="admin-form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="admin-form-grid">
                        <div className="admin-form-group">
                            <label>Password *</label>
                            <input
                                type="password"
                                name="password"
                                value={instructorForm.password}
                                onChange={handleInstructorFormChange}
                                className="admin-form-input"
                                required
                                minLength={6}
                            />
                        </div>
                        <div className="admin-form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={instructorForm.phone}
                                onChange={handleInstructorFormChange}
                                className="admin-form-input"
                            />
                        </div>
                    </div>

                    <div className="admin-form-grid">
                        <div className="admin-form-group">
                            <label>Monthly Rate (LKR) *</label>
                            <input
                                type="number"
                                name="monthlyRate"
                                value={instructorForm.monthlyRate}
                                onChange={handleInstructorFormChange}
                                className="admin-form-input"
                                required
                                min="1"
                            />
                        </div>
                        <div className="admin-form-group">
                            <label>Experience (Years)</label>
                            <input
                                type="number"
                                name="experience"
                                value={instructorForm.experience}
                                onChange={handleInstructorFormChange}
                                className="admin-form-input"
                                min="0"
                            />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Specializations</label>
                        <select
                            onChange={(e) => {
                                handleSpecializationAdd(e.target.value);
                                e.target.value = '';
                            }}
                            className="admin-select"
                            defaultValue=""
                        >
                            <option value="" disabled>Add specialization...</option>
                            {specializationOptions.filter(s => !instructorForm.specializations.includes(s)).map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                        <div className="admin-specialization-tags">
                            {instructorForm.specializations.map((spec, i) => (
                                <span key={i} className="admin-specialization-tag removable">
                                    {spec}
                                    <button type="button" onClick={() => handleSpecializationRemove(spec)}>×</button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Bio</label>
                        <textarea
                            name="bio"
                            value={instructorForm.bio}
                            onChange={handleInstructorFormChange}
                            className="admin-form-textarea"
                            rows={3}
                            placeholder="Short bio about the instructor..."
                        />
                    </div>

                    <div className="admin-modal-actions">
                        <Button variant="secondary" type="button" onClick={() => setCreateInstructorModalOpen(false)}>Cancel</Button>
                        <Button type="submit" disabled={creatingInstructor}>
                            {creatingInstructor ? 'Creating...' : 'Create Instructor'}
                        </Button>
                    </div>
                </form>
            </Modal>

            {/* Edit Instructor Modal */}
            <Modal
                isOpen={editInstructorModalOpen}
                onClose={() => setEditInstructorModalOpen(false)}
                title="Edit Instructor"
            >
                <form onSubmit={handleUpdateInstructor} className="admin-modal-form">
                    <div className="admin-form-grid">
                        <div className="admin-form-group">
                            <label>Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={editInstructorForm.name}
                                onChange={handleEditInstructorFormChange}
                                className="admin-form-input"
                                required
                            />
                        </div>
                        <div className="admin-form-group">
                            <label>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={editInstructorForm.email}
                                onChange={handleEditInstructorFormChange}
                                className="admin-form-input"
                                required
                            />
                        </div>
                    </div>

                    <div className="admin-form-grid">
                        <div className="admin-form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={editInstructorForm.phone}
                                onChange={handleEditInstructorFormChange}
                                className="admin-form-input"
                            />
                        </div>
                        <div className="admin-form-group">
                            <label>Monthly Rate (LKR) *</label>
                            <input
                                type="number"
                                name="monthlyRate"
                                value={editInstructorForm.monthlyRate}
                                onChange={handleEditInstructorFormChange}
                                className="admin-form-input"
                                required
                                min="1"
                            />
                        </div>
                    </div>

                    <div className="admin-form-grid">
                        <div className="admin-form-group">
                            <label>Experience (Years)</label>
                            <input
                                type="number"
                                name="experience"
                                value={editInstructorForm.experience}
                                onChange={handleEditInstructorFormChange}
                                className="admin-form-input"
                                min="0"
                            />
                        </div>
                        <div className="admin-form-group admin-form-checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="isAvailable"
                                    checked={editInstructorForm.isAvailable}
                                    onChange={handleEditInstructorFormChange}
                                />
                                Available
                            </label>
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Specializations</label>
                        <select
                            onChange={(e) => {
                                handleEditSpecializationAdd(e.target.value);
                                e.target.value = '';
                            }}
                            className="admin-select"
                            defaultValue=""
                        >
                            <option value="" disabled>Add specialization...</option>
                            {specializationOptions.filter(s => !editInstructorForm.specializations.includes(s)).map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                        <div className="admin-specialization-tags">
                            {editInstructorForm.specializations.map((spec, i) => (
                                <span key={i} className="admin-specialization-tag removable">
                                    {spec}
                                    <button type="button" onClick={() => handleEditSpecializationRemove(spec)}>×</button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Bio</label>
                        <textarea
                            name="bio"
                            value={editInstructorForm.bio}
                            onChange={handleEditInstructorFormChange}
                            className="admin-form-textarea"
                            rows={3}
                            placeholder="Short bio about the instructor..."
                        />
                    </div>

                    <div className="admin-modal-actions">
                        <Button variant="secondary" type="button" onClick={() => setEditInstructorModalOpen(false)}>Cancel</Button>
                        <Button type="submit" disabled={updatingInstructor}>
                            {updatingInstructor ? 'Updating...' : 'Update Instructor'}
                        </Button>
                    </div>
                </form>
            </Modal>

            {/* User Details Modal */}
            <Modal
                isOpen={userDetailsModalOpen}
                onClose={() => {
                    setUserDetailsModalOpen(false);
                    setSelectedUserDetails(null);
                }}
                title="User Details"
            >
                {loadingUserDetails ? (
                    <div className="admin-modal-loading">
                        <div className="admin-loading-spinner"></div>
                    </div>
                ) : selectedUserDetails ? (
                    <div className="admin-user-details">
                        <div className="admin-user-details-header">
                            <div className="admin-user-details-avatar">
                                {selectedUserDetails.name?.[0] || 'U'}
                            </div>
                            <div>
                                <h3>{selectedUserDetails.name}</h3>
                                <p>{selectedUserDetails.email}</p>
                            </div>
                        </div>

                        <div className="admin-user-details-grid">
                            <div>
                                <p className="label">Role</p>
                                <p className="value">{selectedUserDetails.role}</p>
                            </div>
                            <div>
                                <p className="label">Status</p>
                                <p className={cn("value", selectedUserDetails.isActive ? "active" : "inactive")}>
                                    {selectedUserDetails.isActive ? 'Active' : 'Inactive'}
                                </p>
                            </div>
                            <div>
                                <p className="label">Phone</p>
                                <p className="value">{selectedUserDetails.phone || 'Not provided'}</p>
                            </div>
                            <div>
                                <p className="label">Gender</p>
                                <p className="value">{selectedUserDetails.gender || 'Not specified'}</p>
                            </div>
                            <div>
                                <p className="label">Joined</p>
                                <p className="value">{new Date(selectedUserDetails.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p className="label">Last Login</p>
                                <p className="value">
                                    {selectedUserDetails.lastLogin
                                        ? new Date(selectedUserDetails.lastLogin).toLocaleDateString()
                                        : 'Never'}
                                </p>
                            </div>
                        </div>

                        <div className="admin-modal-actions">
                            {selectedUserDetails.isActive ? (
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        handleSuspendUser(selectedUserDetails._id);
                                        setUserDetailsModalOpen(false);
                                    }}
                                >
                                    Suspend User
                                </Button>
                            ) : (
                                <Button
                                    variant="success"
                                    onClick={() => {
                                        handleActivateUser(selectedUserDetails._id);
                                        setUserDetailsModalOpen(false);
                                    }}
                                >
                                    Activate User
                                </Button>
                            )}
                            <Button variant="secondary" onClick={() => setUserDetailsModalOpen(false)}>Close</Button>
                        </div>
                    </div>
                ) : null}
            </Modal>
        </div>
    );
};

export default UsersPage;
