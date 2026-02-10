import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { workoutAPI } from '../api/workout.api';
import { exerciseAPI } from '../api/exercise.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ArrowLeft, Save, Plus, X, Dumbbell, GripVertical, Search } from 'lucide-react';
import './AddWorkout.css';
import './CreateNotification.css';

const AddWorkout = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [exercises, setExercises] = useState([]);
    const [exerciseSearch, setExerciseSearch] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        difficulty: 'beginner',
        duration: '',
        workoutsPerWeek: '',
        scheduleType: '1-day',
        goals: [],
        exercises: []
    });
    const [newGoal, setNewGoal] = useState('');

    // Fetch exercises from database
    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const res = await exerciseAPI.getAllExercises({ limit: 1000 });
                const items = res.data?.items || res.items || [];
                setExercises(items);
            } catch (err) {
                console.error('Failed to fetch exercises:', err);
            }
        };
        fetchExercises();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const addGoal = () => {
        if (newGoal.trim() && !formData.goals.includes(newGoal.trim())) {
            setFormData(prev => ({
                ...prev,
                goals: [...prev.goals, newGoal.trim()]
            }));
            setNewGoal('');
        }
    };

    const removeGoal = (goal) => {
        setFormData(prev => ({
            ...prev,
            goals: prev.goals.filter(g => g !== goal)
        }));
    };

    const addExercise = () => {
        setFormData(prev => ({
            ...prev,
            exercises: [...prev.exercises, {
                exerciseId: '',
                exerciseName: '',
                setReps: [{ sets: '3', reps: '10' }],
                restTime: 60,
                scheduleDay: 1,
                notes: ''
            }]
        }));
    };

    const removeExercise = (index) => {
        setFormData(prev => ({
            ...prev,
            exercises: prev.exercises.filter((_, i) => i !== index)
        }));
        // Clean up search state
        setExerciseSearch(prev => {
            const newSearch = { ...prev };
            delete newSearch[index];
            return newSearch;
        });
    };

    const updateExercise = (index, field, value) => {
        setFormData(prev => ({
            ...prev,
            exercises: prev.exercises.map((ex, i) =>
                i === index ? { ...ex, [field]: value } : ex
            )
        }));
    };

    const selectExercise = (index, exerciseObj) => {
        setFormData(prev => ({
            ...prev,
            exercises: prev.exercises.map((ex, i) =>
                i === index ? {
                    ...ex,
                    exerciseId: exerciseObj._id,
                    exerciseName: exerciseObj.name
                } : ex
            )
        }));
        // Clear search for this exercise
        setExerciseSearch(prev => ({ ...prev, [index]: '' }));
    };

    const addSetRep = (exerciseIndex) => {
        setFormData(prev => ({
            ...prev,
            exercises: prev.exercises.map((ex, i) =>
                i === exerciseIndex
                    ? { ...ex, setReps: [...ex.setReps, { sets: '3', reps: '10' }] }
                    : ex
            )
        }));
    };

    const removeSetRep = (exerciseIndex, setRepIndex) => {
        setFormData(prev => ({
            ...prev,
            exercises: prev.exercises.map((ex, i) =>
                i === exerciseIndex
                    ? { ...ex, setReps: ex.setReps.filter((_, j) => j !== setRepIndex) }
                    : ex
            )
        }));
    };

    const updateSetRep = (exerciseIndex, setRepIndex, field, value) => {
        setFormData(prev => ({
            ...prev,
            exercises: prev.exercises.map((ex, i) =>
                i === exerciseIndex
                    ? {
                        ...ex,
                        setReps: ex.setReps.map((sr, j) =>
                            j === setRepIndex ? { ...sr, [field]: value } : sr
                        )
                    }
                    : ex
            )
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await workoutAPI.createWorkout(formData);
            navigate('/admin/workouts');
        } catch (error) {
            console.error(error);
            alert('Failed to create workout');
        } finally {
            setLoading(false);
        }
    };

    const getMaxDays = () => {
        if (formData.scheduleType === '3-day') return 3;
        if (formData.scheduleType === '2-day') return 2;
        return 1;
    };

    const getFilteredExercises = (index) => {
        const searchTerm = exerciseSearch[index] || '';
        if (!searchTerm) return exercises;
        return exercises.filter(ex =>
            ex.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="page-container" style={{ maxWidth: '64rem' }}>
            <div className="page-header">
                <Button variant="ghost" onClick={() => navigate(-1)} icon={ArrowLeft} />
                <div className="page-title">
                    <h1>Add Workout Program</h1>
                    <p>Create a new workout program for the mobile app</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="form-section">
                <div className="two-col-layout">
                    <div className="form-section">
                        <Card className="form-section" style={{ gap: '1rem' }}>
                            <h3 className="section-title">Basic Info</h3>
                            <div className="input-group">
                                <label className="input-label">Workout Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="custom-input"
                                    placeholder="e.g., Full Body Starter"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label className="input-label">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="custom-input"
                                    style={{ height: '6rem' }}
                                    placeholder="Describe the workout program..."
                                    required
                                />
                            </div>
                            <div className="link-grid">
                                <div className="input-group">
                                    <label className="input-label">Difficulty</label>
                                    <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="select-input">
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Schedule Type</label>
                                    <select name="scheduleType" value={formData.scheduleType} onChange={handleChange} className="select-input">
                                        <option value="1-day">Single Day</option>
                                        <option value="2-day">2 Day Split</option>
                                        <option value="3-day">3 Day Split</option>
                                    </select>
                                </div>
                            </div>
                            <div className="link-grid">
                                <div className="input-group">
                                    <label className="input-label">Duration</label>
                                    <input
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        className="custom-input"
                                        placeholder="e.g., 4 weeks"
                                    />
                                </div>
                                <div className="input-group">
                                    <label className="input-label">Workouts Per Week</label>
                                    <input
                                        name="workoutsPerWeek"
                                        value={formData.workoutsPerWeek}
                                        onChange={handleChange}
                                        className="custom-input"
                                        placeholder="e.g., 3x per week"
                                    />
                                </div>
                            </div>
                        </Card>

                        <Card className="form-section" style={{ gap: '1rem' }}>
                            <h3 className="section-title">Goals</h3>
                            <div className="input-group">
                                <div className="goal-input-wrapper">
                                    <input
                                        value={newGoal}
                                        onChange={(e) => setNewGoal(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addGoal())}
                                        className="custom-input"
                                        placeholder="Add a goal (e.g., Build foundation)"
                                    />
                                    <Button type="button" variant="ghost" size="sm" onClick={addGoal} icon={Plus}>Add</Button>
                                </div>
                                <div className="tags-container">
                                    {formData.goals.map((goal, idx) => (
                                        <span key={idx} className="tag">
                                            {goal}
                                            <button type="button" onClick={() => removeGoal(goal)}>
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="form-section">
                        <Card className="form-section exercises-card" style={{ gap: '1rem' }}>
                            <div className="exercises-header">
                                <h3 className="section-title">Exercises ({formData.exercises.length})</h3>
                                <Button type="button" variant="ghost" size="sm" onClick={addExercise} icon={Plus}>
                                    Add Exercise
                                </Button>
                            </div>

                            {formData.exercises.length === 0 ? (
                                <div className="empty-exercises">
                                    <Dumbbell size={40} className="text-gray-300" />
                                    <p>No exercises added yet</p>
                                    <Button type="button" variant="outline" size="sm" onClick={addExercise} icon={Plus}>
                                        Add First Exercise
                                    </Button>
                                </div>
                            ) : (
                                <div className="exercises-list">
                                    {formData.exercises.map((exercise, index) => (
                                        <div key={index} className="exercise-item">
                                            <div className="exercise-drag">
                                                <GripVertical size={16} className="text-gray-400" />
                                            </div>
                                            <div className="exercise-form">
                                                <div className="exercise-row">
                                                    <div className="exercise-select-wrapper">
                                                        {exercise.exerciseName ? (
                                                            <div className="selected-exercise">
                                                                <span className="selected-exercise-name">{exercise.exerciseName}</span>
                                                                <button
                                                                    type="button"
                                                                    className="change-exercise-btn"
                                                                    onClick={() => updateExercise(index, 'exerciseName', '')}
                                                                >
                                                                    Change
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div className="exercise-dropdown">
                                                                <div className="exercise-search-input">
                                                                    <Search size={16} className="search-icon-small" />
                                                                    <input
                                                                        value={exerciseSearch[index] || ''}
                                                                        onChange={(e) => setExerciseSearch(prev => ({ ...prev, [index]: e.target.value }))}
                                                                        className="custom-input"
                                                                        placeholder="Search exercises..."
                                                                    />
                                                                </div>
                                                                <div className="exercise-options">
                                                                    {getFilteredExercises(index).slice(0, 8).map((ex) => (
                                                                        <button
                                                                            key={ex._id}
                                                                            type="button"
                                                                            className="exercise-option"
                                                                            onClick={() => selectExercise(index, ex)}
                                                                        >
                                                                            <span className="exercise-option-name">{ex.name}</span>
                                                                            <span className="exercise-option-category">{ex.category}</span>
                                                                        </button>
                                                                    ))}
                                                                    {getFilteredExercises(index).length === 0 && (
                                                                        <div className="no-exercises-found">No exercises found</div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {getMaxDays() > 1 && (
                                                        <select
                                                            value={exercise.scheduleDay}
                                                            onChange={(e) => updateExercise(index, 'scheduleDay', parseInt(e.target.value))}
                                                            className="select-input day-select"
                                                        >
                                                            {Array.from({ length: getMaxDays() }, (_, i) => (
                                                                <option key={i + 1} value={i + 1}>Day {i + 1}</option>
                                                            ))}
                                                        </select>
                                                    )}
                                                    <button type="button" className="remove-exercise-btn" onClick={() => removeExercise(index)}>
                                                        <X size={16} />
                                                    </button>
                                                </div>

                                                {exercise.exerciseName && (
                                                    <>
                                                        <div className="set-reps-section">
                                                            <label className="small-label">Sets & Reps</label>
                                                            <div className="set-reps-list">
                                                                {exercise.setReps.map((setRep, srIndex) => (
                                                                    <div key={srIndex} className="set-rep-row">
                                                                        <input
                                                                            value={setRep.sets}
                                                                            onChange={(e) => updateSetRep(index, srIndex, 'sets', e.target.value)}
                                                                            className="custom-input small-input"
                                                                            placeholder="Sets"
                                                                        />
                                                                        <span className="times-symbol">×</span>
                                                                        <input
                                                                            value={setRep.reps}
                                                                            onChange={(e) => updateSetRep(index, srIndex, 'reps', e.target.value)}
                                                                            className="custom-input small-input"
                                                                            placeholder="Reps"
                                                                        />
                                                                        {exercise.setReps.length > 1 && (
                                                                            <button type="button" className="remove-setrep-btn" onClick={() => removeSetRep(index, srIndex)}>
                                                                                <X size={12} />
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                                <button type="button" className="add-setrep-btn" onClick={() => addSetRep(index)}>
                                                                    <Plus size={12} /> Add Set
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="exercise-row">
                                                            <div className="input-group inline">
                                                                <label className="small-label">Rest (seconds)</label>
                                                                <input
                                                                    type="number"
                                                                    value={exercise.restTime}
                                                                    onChange={(e) => updateExercise(index, 'restTime', parseInt(e.target.value) || 0)}
                                                                    className="custom-input small-input"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="input-group">
                                                            <input
                                                                value={exercise.notes}
                                                                onChange={(e) => updateExercise(index, 'notes', e.target.value)}
                                                                className="custom-input"
                                                                placeholder="Notes (optional)"
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </Card>
                    </div>
                </div>

                <div className="form-footer">
                    <Button type="submit" variant="primary" size="lg" icon={Save} isLoading={loading}>
                        Save Workout
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddWorkout;
