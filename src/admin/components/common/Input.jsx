import React from 'react';
import { cn } from '../../utils';
import * as LucideIcons from 'lucide-react';
import './Input.css';

const Input = ({
    label,
    leftIcon,
    className,
    error,
    multiline,
    ...props
}) => {
    let IconComponent = leftIcon;
    if (typeof leftIcon === 'string') {
        const iconName = leftIcon.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
        IconComponent = LucideIcons[iconName] || LucideIcons[leftIcon];
    }

    return (
        <div className={cn("admin-input-container", className)}>
            {label && <label className="admin-input-label">{label}</label>}
            <div className="admin-input-wrapper">
                {IconComponent && (
                    typeof IconComponent === 'function' || typeof IconComponent === 'object' ?
                        <IconComponent className="admin-input-icon" size={18} /> : null
                )}
                {multiline ? (
                    <textarea
                        className={cn("admin-input admin-input-area", IconComponent && "has-icon")}
                        {...props}
                    />
                ) : (
                    <input
                        className={cn("admin-input", IconComponent && "has-icon")}
                        {...props}
                    />
                )}
            </div>
            {error && <p className="admin-input-error">{error}</p>}
        </div>
    );
};

export default Input;
