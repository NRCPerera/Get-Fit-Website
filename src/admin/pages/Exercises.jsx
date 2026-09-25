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
    Trash,
    Video,
    VideoOff,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { cn } from '../utils';
import { useNavigate } from 'react-router-dom';
import './Exercises.css';

const PAGE_SIZE = 12;

const getVideoThumbnailUrl = (videoUrl) => {
    if (!videoUrl || !videoUrl.includes('/video/upload/')) return null;

    const queryIndex = videoUrl.search(/[?#]/);
    const cleanUrl = queryIndex >= 0 ? videoUrl.slice(0, queryIndex) : videoUrl;
    const suffix = queryIndex >= 0 ? videoUrl.slice(queryIndex) : '';
    const transformedUrl = cleanUrl.replace(
        '/video/upload/',
        '/video/upload/so_0,c_fill,w_640,h_480,q_auto,f_jpg/'
    );
    const extensionIndex = transformedUrl.lastIndexOf('.');
    const slashIndex = transformedUrl.lastIndexOf('/');

    return `${extensionIndex > slashIndex ? transformedUrl.slice(0, extensionIndex) : transformedUrl}.jpg${suffix}`;
};

const ExerciseMedia = ({ exercise }) => {
    const [previewFailed, setPreviewFailed] = useState(false);
    const imageUrl = exercise.imageUrl || exercise.thumbnailUrl || exercise.gifUrl;
    const generatedThumbnail = getVideoThumbnailUrl(exercise.videoUrl);
    const previewUrl = imageUrl || generatedThumbnail;
    const hasVideo = Boolean(exercise.videoUrl);

    if (previewUrl && !previewFailed) {
        return (
            <img
                src={previewUrl}
                alt={`${exercise.name} preview`}
                className="admin-exercise-img"
                loading="lazy"
                onError={() => setPreviewFailed(true)}
            />
        );
    }

    if (hasVideo) {
        return (
            <video
                src={exercise.videoUrl}
                className="admin-exercise-img admin-exercise-video-preview"
                preload="metadata"
                muted
                playsInline
                aria-label={`${exercise.name} video preview`}
                onLoadedMetadata={(event) => {
                    if (event.currentTarget.duration > 0.1) event.currentTarget.currentTime = 0.1;
                }}
            />
        );
    }

    return (
        <div className="admin-exercise-placeholder">
            <Dumbbell size={32} />
        </div>
    );
};

const getVisiblePages = (currentPage, totalPages) => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);

    const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
    return [...pages]
        .filter((value) => value >= 1 && value <= totalPages)
        .sort((a, b) => a - b);
};

const ExercisesPage = () => {
    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [category, setCategory] = useState('');
    const [actionMenuOpen, setActionMenuOpen] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const timer = window.setTimeout(() => setDebouncedQuery(query.trim()), 300);
        return () => window.clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        let cancelled = false;

        const fetchExercises = async () => {
            setLoading(true);
            try {
                const res = await exerciseAPI.getAllExercises({
                    page,
                    limit: PAGE_SIZE,
                    q: debouncedQuery || undefined,
                    category: category || undefined
                });
                if (cancelled) return;

                const data = res.data || res;
                setExercises(data?.items || []);
                setTotal(data?.total || 0);
                setTotalPages(Math.max(data?.pages || 1, 1));
                setActionMenuOpen(null);
            } catch (err) {
                if (!cancelled) console.error(err);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchExercises();
        return () => { cancelled = true; };
    }, [page, category, debouncedQuery, reloadKey]);

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this exercise?')) return;
        try {
            await exerciseAPI.deleteExercise(id);
            if (exercises.length === 1 && page > 1) {
                setPage(prev => prev - 1);
            } else {
                setReloadKey(prev => prev + 1);
            }
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
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1);
                        }}
                        className="admin-search-input"
                    />
                </div>
                <div className="admin-category-filters">
                    {['Strength', 'Cardio', 'Flexibility', 'Balance'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setCategory(cat.toLowerCase() === category ? '' : cat.toLowerCase());
                                setPage(1);
                            }}
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
            {loading ? (
                <div className="admin-loading">
                    <div className="admin-loading-spinner"></div>
                </div>
            ) : exercises.length === 0 ? (
                <Card className="admin-exercises-empty">
                    <Dumbbell size={36} />
                    <h3>No exercises found</h3>
                    <p>Try changing the search term or category filter.</p>
                </Card>
            ) : (
                <>
                    <div className="admin-exercises-summary">
                        Showing {(page - 1) * PAGE_SIZE + 1}&ndash;{Math.min(page * PAGE_SIZE, total)} of {total} exercises
                    </div>
                    <div className="admin-exercises-grid">
                        {exercises.map((exercise) => (
                            <Card key={exercise._id} className="admin-exercise-card">
                                <div className="admin-exercise-media">
                                    <ExerciseMedia exercise={exercise} />
                                    <div className={cn('admin-video-status', exercise.videoUrl ? 'has-video' : 'no-video')}>
                                        {exercise.videoUrl ? <Video size={13} /> : <VideoOff size={13} />}
                                        {exercise.videoUrl ? 'Video' : 'No video'}
                                    </div>
                                    <div className="admin-exercise-actions">
                                        <div className="admin-action-menu-container">
                                            <button
                                                className="admin-more-btn"
                                                onClick={(e) => toggleActionMenu(exercise._id, e)}
                                                aria-label={`Actions for ${exercise.name}`}
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
                                    <p className="admin-exercise-muscle">{exercise.muscleGroups?.join(', ') || 'No muscle groups specified'}</p>

                                    <div className="admin-exercise-footer">
                                        <span className="admin-category-tag">{exercise.category}</span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <nav className="admin-exercises-pagination" aria-label="Exercise pages">
                            <button
                                className="admin-pagination-nav"
                                onClick={() => setPage(prev => Math.max(1, prev - 1))}
                                disabled={page === 1}
                                aria-label="Previous page"
                            >
                                <ChevronLeft size={17} /> Previous
                            </button>

                            <div className="admin-pagination-pages">
                                {getVisiblePages(page, totalPages).map((pageNumber, index, visiblePages) => (
                                    <React.Fragment key={pageNumber}>
                                        {index > 0 && pageNumber - visiblePages[index - 1] > 1 && (
                                            <span className="admin-pagination-ellipsis">&hellip;</span>
                                        )}
                                        <button
                                            className={cn('admin-pagination-page', pageNumber === page && 'active')}
                                            onClick={() => setPage(pageNumber)}
                                            aria-current={pageNumber === page ? 'page' : undefined}
                                            aria-label={`Page ${pageNumber}`}
                                        >
                                            {pageNumber}
                                        </button>
                                    </React.Fragment>
                                ))}
                            </div>

                            <button
                                className="admin-pagination-nav"
                                onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={page === totalPages}
                                aria-label="Next page"
                            >
                                Next <ChevronRight size={17} />
                            </button>
                        </nav>
                    )}
                </>
            )}
        </div>
    );
};

export default ExercisesPage;
