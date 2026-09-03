import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { exerciseAPI } from '../api/exercise.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ArrowLeft, Save, Plus, X, Upload, Trash2 } from 'lucide-react';
import './AddExercise.css';

const EditExercise = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: 'strength',
        difficulty: 'beginner',
        duration: '',
        caloriesBurned: '',
        muscleGroups: [],
        equipment: [],
        instructions: ['']
    });
    const [video, setVideo] = useState(null);
    const [existingVideoUrl, setExistingVideoUrl] = useState(null);
    const [removeVideo, setRemoveVideo] = useState(false);

    useEffect(() => {
        const fetchExercise = async () => {
            try {
                const res = await exerciseAPI.getExerciseById(id);
                const exercise = res?.data?.exercise;
                if (exercise) {
                    setFormData({
                        name: exercise.name || '',
                        description: exercise.description || '',
                        category: exercise.category || 'strength',
                        difficulty: exercise.difficulty || 'beginner',
                        duration: exercise.duration || '',
                        caloriesBurned: exercise.caloriesBurned || '',
                        muscleGroups: exercise.muscleGroups || [],
                        equipment: exercise.equipment || [],
                        instructions: exercise.instructions?.length > 0 ? exercise.instructions : ['']
                    });
                    if (exercise.videoUrl) {
                        setExistingVideoUrl(typeof exercise.videoUrl === 'string'
                            ? exercise.videoUrl
                            : exercise.videoUrl?.secure_url || exercise.videoUrlData?.secure_url);
                    }
                }
            } catch (error) {
                console.error(error);
                alert('Failed to load exercise');
                navigate('/admin/exercises');
            } finally {
                setFetching(false);
            }
        };
        fetchExercise();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleInstructionChange = (index, value) => {
        const newInstructions = [...formData.instructions];
        newInstructions[index] = value;
        setFormData(prev => ({ ...prev, instructions: newInstructions }));
    };

    const addInstruction = () => {
        setFormData(prev => ({ ...prev, instructions: [...prev.instructions, ''] }));
    };

    const removeInstruction = (index) => {
        setFormData(prev => ({
            ...prev,
            instructions: prev.instructions.filter((_, i) => i !== index)
        }));
    };

    const handleMuscleGroupChange = (e) => {
        const value = e.target.value;
        if (value && !formData.muscleGroups.includes(value)) {
            setFormData(prev => ({
                ...prev,
                muscleGroups: [...prev.muscleGroups, value]
            }));
        }
        e.target.value = '';
    };

    const removeMuscleGroup = (group) => {
        setFormData(prev => ({
            ...prev,
            muscleGroups: prev.muscleGroups.filter(g => g !== group)
        }));
    };

    const handleEquipmentChange = (e) => {
        const value = e.target.value;
        if (value && !formData.equipment.includes(value)) {
            setFormData(prev => ({
                ...prev,
                equipment: [...prev.equipment, value]
            }));
        }
        e.target.value = '';
    };

    const removeEquipment = (item) => {
        setFormData(prev => ({
            ...prev,
            equipment: prev.equipment.filter(e => e !== item)
        }));
    };

    const handleRemoveVideo = () => {
        setRemoveVideo(true);
        setExistingVideoUrl(null);
        setVideo(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();

        // Add basic fields
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('category', formData.category);
        data.append('difficulty', formData.difficulty);

        if (formData.duration) data.append('duration', formData.duration);
        if (formData.caloriesBurned) data.append('caloriesBurned', formData.caloriesBurned);

        // Add array fields as JSON
        data.append('muscleGroups', JSON.stringify(formData.muscleGroups));
        data.append('equipment', JSON.stringify(formData.equipment));
        data.append('instructions', JSON.stringify(formData.instructions.filter(i => i.trim())));

        // Handle video
        if (video) {
            data.append('videoUrl', video);
        } else if (removeVideo) {
            data.append('removeVideo', 'true');
        }

        try {
            await exerciseAPI.updateExercise(id, data);
            navigate('/admin/exercises');
        } catch (error) {
            console.error(error);
            alert('Failed to update exercise');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="admin-loading">
                <div className="admin-loading-spinner"></div>
            </div>
        );
    }

    const muscleGroupOptions = ['chest', 'back', 'legs', 'arms', 'shoulders', 'core', 'full-body'];
    const formatLabel = (val) => val.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const equipmentOptions = ['Barbell', 'Dumbbell', 'Kettlebell', 'Cable Machine', 'Resistance Band', 'Pull-up Bar', 'Bench', 'Exercise Ball', 'Medicine Ball', 'Bodyweight', 'Machine', 'TRX'];

    return (
        <div className="admin-add-exercise-page">
            <div className="admin-page-header">
                <Button variant="ghost" onClick={() => navigate(-1)} icon={ArrowLeft} />
                <div>
                    <h1 className="admin-page-title">Edit Exercise</h1>
                    <p className="admin-page-subtitle">Update exercise details</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="admin-exercise-form">
                <div className="admin-form-grid">
                    <div className="admin-form-column">
                        <Card>
                            <h3 className="admin-section-title">Basic Info</h3>
                            <div className="admin-input-group">
                                <label className="admin-input-label">Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="admin-input"
                                    required
                                />
                            </div>
                            <div className="admin-input-group">
                                <label className="admin-input-label">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="admin-input admin-textarea"
                                    required
                                />
                            </div>
                            <div className="admin-input-row">
                                <div className="admin-input-group">
                                    <label className="admin-input-label">Category</label>
                                    <select name="category" value={formData.category} onChange={handleChange} className="admin-select">
                                        {['strength', 'cardio', 'flexibility', 'balance', 'sports'].map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div className="admin-input-group">
                                    <label className="admin-input-label">Difficulty</label>
                                    <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="admin-select">
                                        {['beginner', 'intermediate', 'advanced'].map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="admin-input-row">
                                <div className="admin-input-group">
                                    <label className="admin-input-label">Duration (minutes)</label>
                                    <input
                                        name="duration"
                                        type="number"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        className="admin-input"
                                        placeholder="e.g., 60"
                                    />
                                </div>
                                <div className="admin-input-group">
                                    <label className="admin-input-label">Calories Burned</label>
                                    <input
                                        name="caloriesBurned"
                                        type="number"
                                        value={formData.caloriesBurned}
                                        onChange={handleChange}
                                        className="admin-input"
                                        placeholder="e.g., 50"
                                    />
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="admin-section-title">Media</h3>
                            {existingVideoUrl && !removeVideo && (
                                <div className="admin-existing-media">
                                    <video src={existingVideoUrl} controls className="admin-video-preview" />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={handleRemoveVideo}
                                    >
                                        <Trash2 size={16} /> Remove Video
                                    </Button>
                                </div>
                            )}
                            <div className="admin-upload-area">
                                <input
                                    type="file"
                                    accept="video/*"
                                    onChange={(e) => {
                                        setVideo(e.target.files[0]);
                                        setRemoveVideo(false);
                                    }}
                                    className="admin-upload-input"
                                />
                                <Upload size={32} />
                                <p>
                                    {existingVideoUrl && !removeVideo ? 'Click to replace video' : 'Click to upload video'}
                                </p>
                                {video && <p className="admin-file-name">{video.name}</p>}
                            </div>
                        </Card>
                    </div>

                    <div className="admin-form-column">
                        <Card>
                            <h3 className="admin-section-title">Muscle Groups</h3>
                            <div className="admin-input-group">
                                <select onChange={handleMuscleGroupChange} className="admin-select" defaultValue="">
                                    <option value="" disabled>Add muscle group...</option>
                                    {muscleGroupOptions.filter(m => !formData.muscleGroups.includes(m)).map(m => (
                                        <option key={m} value={m}>{formatLabel(m)}</option>
                                    ))}
                                </select>
                                <div className="admin-tags-container">
                                    {formData.muscleGroups.map((group, idx) => (
                                        <span key={idx} className="admin-tag">
                                            {formatLabel(group)}
                                            <button type="button" onClick={() => removeMuscleGroup(group)}>
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="admin-section-title">Equipment</h3>
                            <div className="admin-input-group">
                                <select onChange={handleEquipmentChange} className="admin-select" defaultValue="">
                                    <option value="" disabled>Add equipment...</option>
                                    {equipmentOptions.filter(e => !formData.equipment.includes(e)).map(e => (
                                        <option key={e} value={e}>{e}</option>
                                    ))}
                                </select>
                                <div className="admin-tags-container">
                                    {formData.equipment.map((item, idx) => (
                                        <span key={idx} className="admin-tag">
                                            {item}
                                            <button type="button" onClick={() => removeEquipment(item)}>
                                                <X size={14} />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="admin-section-title">Instructions</h3>
                            <div className="admin-instructions-list">
                                {formData.instructions.map((step, idx) => (
                                    <div key={idx} className="admin-instruction-step">
                                        <span className="admin-step-number">{idx + 1}.</span>
                                        <input
                                            value={step}
                                            onChange={(e) => handleInstructionChange(idx, e.target.value)}
                                            className="admin-input"
                                            placeholder={`Step ${idx + 1}`}
                                        />
                                        {formData.instructions.length > 1 && (
                                            <button type="button" onClick={() => removeInstruction(idx)} className="admin-remove-step">
                                                <X size={16} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <Button type="button" variant="ghost" size="sm" onClick={addInstruction} icon={Plus}>Add Step</Button>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="admin-form-footer">
                    <Button type="submit" variant="primary" size="lg" icon={Save} isLoading={loading}>
                        Update Exercise
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditExercise;
