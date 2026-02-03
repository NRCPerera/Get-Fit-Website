import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { exerciseAPI } from '../api/exercise.api';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { ArrowLeft, Save, Plus, X, Upload } from 'lucide-react';
import { cn } from '../utils';
import './AddExercise.css';

const AddExercise = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
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

    const muscleGroupOptions = ['chest', 'back', 'legs', 'arms', 'shoulders', 'core', 'full-body'];
    const equipmentOptions = ['Barbell', 'Dumbbell', 'Kettlebell', 'Cable Machine', 'Resistance Band', 'Pull-up Bar', 'Bench', 'Exercise Ball', 'Medicine Ball', 'Bodyweight', 'Machine', 'TRX'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            if (Array.isArray(formData[key])) {
                formData[key].forEach(val => data.append(`${key}[]`, val));
            } else {
                data.append(key, formData[key]);
            }
        });

        if (video) {
            data.append('videoUrl', video);
        }

        try {
            await exerciseAPI.createExercise(data);
            navigate('/admin/exercises');
        } catch (error) {
            console.error(error);
            alert('Failed to create exercise');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-add-exercise-page">
            <div className="admin-page-header">
                <Button variant="ghost" onClick={() => navigate(-1)} icon={ArrowLeft} />
                <div>
                    <h1 className="admin-page-title">Add Exercise</h1>
                    <p className="admin-page-subtitle">Add a new exercise to the library</p>
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
                            <div className="admin-upload-area">
                                <input
                                    type="file"
                                    accept="video/*,image/*"
                                    onChange={(e) => setVideo(e.target.files[0])}
                                    className="admin-upload-input"
                                />
                                <Upload size={32} />
                                <p>Click to upload video or thumbnail</p>
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
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                                <div className="admin-tags-container">
                                    {formData.muscleGroups.map((group, idx) => (
                                        <span key={idx} className="admin-tag">
                                            {group}
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
                        Save Exercise
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddExercise;
