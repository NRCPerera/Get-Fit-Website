import React, { useState, useEffect } from 'react';
import { exerciseAPI } from '../api/exercise.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import {
    Search,
    Plus,
    Dumbbell,
    MoreHorizontal,
    Edit,
    Trash
} from 'lucide-react';
import { cn } from '../utils';
import { useNavigate } from 'react-router-dom';
import './Exercises.css';

const ExercisesPage = () => {
    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [actionMenuOpen, setActionMenuOpen] = useState(null);

    useEffect(() => {
        fetchExercises();
    }, [page, category, query]);

    const fetchExercises = async () => {
        setLoading(true);
        try {
            const res = await exerciseAPI.getAllExercises({
                page,
                limit: 200,
                q: query,
                category: category || undefined
            });
            const items = res.data?.items || res.items || [];
            if (page === 1) {
                setExercises(items);
            } else {
                setExercises(prev => [...prev, ...items]);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this exercise?')) return;
        try {
            await exerciseAPI.deleteExercise(id);
            setExercises(prev => prev.filter(e => e._id !== id));
        } catch (error) {
            console.error(error);
            alert('Failed to delete exercise');
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/exercises/edit/${id}`);
    };

    const toggleActionMenu = (id, e) => {
        e.stopPropagation();
        setActionMenuOpen(actionMenuOpen === id ? null : id);
    };

    return (
        <div className="admin-exercises-page">
            <div className="admin-page-header">
                <div>
                    <h1 className="admin-page-title">Exercise Library</h1>
                    <p className="admin-page-subtitle">Manage workout exercises and instructional content</p>
                </div>
                <Button icon={Plus} onClick={() => navigate('/admin/exercises/new')}>Add Exercise</Button>
            </div>

            {/* Filters */}
            <Card className="admin-exercise-filter-card">
                <div className="admin-search-wrapper">
                    <Search className="admin-search-icon" size={18} />
                    <input
                        type="text"
                        placeholder="Search exercises..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="admin-search-input"
                    />
                </div>
                <div className="admin-category-filters">
                    {['Strength', 'Cardio', 'Flexibility', 'Balance'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat.toLowerCase() === category ? '' : cat.toLowerCase())}
                            className={cn(
                                "admin-category-btn",
                                category === cat.toLowerCase() && "active"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </Card>

            {/* Grid */}
            {loading && exercises.length === 0 ? (
                <div className="admin-loading">
                    <div className="admin-loading-spinner"></div>
                </div>
            ) : (
                <div className="admin-exercises-grid">
                    {exercises.map((exercise) => (
                        <Card key={exercise._id} className="admin-exercise-card">
                            <div className="admin-exercise-media">
                                {exercise.gifUrl || exercise.thumbnailUrl ? (
                                    <img
                                        src={exercise.gifUrl || exercise.thumbnailUrl}
                                        alt={exercise.name}
                                        className="admin-exercise-img"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="admin-exercise-placeholder">
                                        <Dumbbell size={32} />
                                    </div>
                                )}
                                <div className="admin-exercise-actions">
                                    <div className="admin-action-menu-container">
                                        <button
                                            className="admin-more-btn"
                                            onClick={(e) => toggleActionMenu(exercise._id, e)}
                                        >
                                            <MoreHorizontal size={16} />
                                        </button>

                                        {actionMenuOpen === exercise._id && (
                                            <div className="admin-action-dropdown">
                                                <button onClick={() => handleEdit(exercise._id)}>
                                                    <Edit size={14} /> Edit
                                                </button>
                                                <button className="delete" onClick={() => handleDelete(exercise._id)}>
                                                    <Trash size={14} /> Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="admin-difficulty-badge">
                                    {exercise.difficulty}
                                </div>
                            </div>
                            <div className="admin-exercise-content">
                                <h3 className="admin-exercise-title" title={exercise.name}>{exercise.name}</h3>
                                <p className="admin-exercise-muscle">{exercise.muscleGroups?.join(', ')}</p>

                                <div className="admin-exercise-footer">
                                    <span className="admin-category-tag">{exercise.category}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExercisesPage;
