import React, { useState, useEffect } from 'react';
import { workoutAPI } from '../api/workout.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
    Search,
    Plus,
    Dumbbell,
    MoreHorizontal,
    Edit,
    Trash,
    Play,
    Clock,
    Target,
    Eye,
    EyeOff
} from 'lucide-react';
import { cn } from '../utils';
import { useNavigate } from 'react-router-dom';
import './Workouts.css';

const WorkoutsPage = () => {
    const navigate = useNavigate();
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [actionMenuOpen, setActionMenuOpen] = useState(null);

    useEffect(() => {
        fetchWorkouts();
    }, [difficulty, query]);

    const fetchWorkouts = async () => {
        setLoading(true);
        try {
            const res = await workoutAPI.getAllWorkouts({
                q: query,
                difficulty: difficulty || undefined
            });
            const items = res.data?.items || res.items || [];
            setWorkouts(items);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this workout?')) return;
        try {
            await workoutAPI.deleteWorkout(id);
            setWorkouts(prev => prev.filter(w => w._id !== id));
        } catch (error) {
            console.error(error);
            alert('Failed to delete workout');
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/workouts/edit/${id}`);
    };

    const handleToggleStatus = async (id, currentStatus) => {
        try {
            await workoutAPI.toggleWorkoutStatus(id, !currentStatus);
            setWorkouts(prev => prev.map(w =>
                w._id === id ? { ...w, isActive: !currentStatus } : w
            ));
        } catch (error) {
            console.error(error);
            alert('Failed to update workout status');
        }
    };

    const toggleActionMenu = (id, e) => {
        e.stopPropagation();
        setActionMenuOpen(actionMenuOpen === id ? null : id);
    };

    const getDifficultyColor = (level) => {
        switch (level) {
            case 'beginner': return 'bg-emerald-100 text-emerald-700';
            case 'intermediate': return 'bg-amber-100 text-amber-700';
            case 'advanced': return 'bg-rose-100 text-rose-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="flex-col gap-6 flex">
            <div className="dashboard-header">
                <div>
                    <h1 className="dashboard-title">Workout Programs</h1>
                    <p className="dashboard-subtitle">Create and manage workout programs for the mobile app</p>
                </div>
                <Button icon={Plus} onClick={() => navigate('/admin/workouts/new')}>Add Workout</Button>
            </div>

            {/* Filters */}
            <Card className="workout-filter-card">
                <div className="search-wrapper">
                    <Search className="search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search workouts..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="category-filters custom-scrollbar">
                    {['Beginner', 'Intermediate', 'Advanced'].map((diff) => (
                        <button
                            key={diff}
                            onClick={() => setDifficulty(diff.toLowerCase() === difficulty ? '' : diff.toLowerCase())}
                            className={cn(
                                "category-btn",
                                difficulty === diff.toLowerCase() && "active"
                            )}
                        >
                            {diff}
                        </button>
                    ))}
                </div>
            </Card>

            {/* Grid */}
            {loading && workouts.length === 0 ? (
                <div className="h-64 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                </div>
            ) : workouts.length === 0 ? (
                <Card className="empty-state">
                    <Dumbbell size={48} className="text-gray-300" />
                    <h3>No Workouts Found</h3>
                    <p>Create your first workout program to get started</p>
                    <Button icon={Plus} onClick={() => navigate('/admin/workouts/new')}>Create Workout</Button>
                </Card>
            ) : (
                <div className="workouts-grid">
                    {workouts.map((workout) => (
                        <Card key={workout._id} className={cn("workout-card group", !workout.isActive && "inactive")}>
                            <div className="workout-header">
                                <div className="workout-icon-wrapper">
                                    <Dumbbell size={24} />
                                </div>
                                <div className="workout-actions">
                                    <div className="relative">
                                        <button
                                            className="more-btn"
                                            onClick={(e) => toggleActionMenu(workout._id, e)}
                                        >
                                            <MoreHorizontal size={16} />
                                        </button>

                                        {actionMenuOpen === workout._id && (
                                            <div className="action-menu">
                                                <button
                                                    className="action-item"
                                                    onClick={() => handleEdit(workout._id)}
                                                >
                                                    <Edit size={14} /> Edit
                                                </button>
                                                <button
                                                    className="action-item"
                                                    onClick={() => handleToggleStatus(workout._id, workout.isActive)}
                                                >
                                                    {workout.isActive ? <EyeOff size={14} /> : <Eye size={14} />}
                                                    {workout.isActive ? 'Deactivate' : 'Activate'}
                                                </button>
                                                <button
                                                    className="action-item danger"
                                                    onClick={() => handleDelete(workout._id)}
                                                >
                                                    <Trash size={14} /> Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="workout-content">
                                <h3 className="workout-title" title={workout.name}>{workout.name}</h3>
                                <p className="workout-desc">{workout.description}</p>

                                <div className="workout-meta">
                                    <span className="meta-item">
                                        <Clock size={14} />
                                        {workout.duration}
                                    </span>
                                    <span className="meta-item">
                                        <Play size={14} />
                                        {workout.workoutsPerWeek}
                                    </span>
                                    <span className="meta-item">
                                        <Target size={14} />
                                        {workout.exercises?.length || 0} exercises
                                    </span>
                                </div>

                                <div className="workout-footer">
                                    <span className={cn("difficulty-badge", getDifficultyColor(workout.difficulty))}>
                                        {workout.difficulty}
                                    </span>
                                    <span className="schedule-type">
                                        {workout.scheduleType}
                                    </span>
                                    {!workout.isActive && (
                                        <span className="inactive-badge">Inactive</span>
                                    )}
                                </div>

                                {workout.goals && workout.goals.length > 0 && (
                                    <div className="workout-goals">
                                        {workout.goals.slice(0, 3).map((goal, index) => (
                                            <span key={index} className="goal-tag">{goal}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WorkoutsPage;
