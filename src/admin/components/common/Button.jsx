import React from 'react';
import { cn } from '../../utils';
import { Loader2 } from 'lucide-react';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    isLoading,
    disabled,
    icon: Icon,
    fullWidth,
    ...props
}) => {
    return (
        <button
            className={cn(
                'admin-btn',
                `admin-btn-${variant}`,
                `admin-btn-${size}`,
                fullWidth && 'admin-btn-full',
                className
            )}
            disabled={isLoading || disabled}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="admin-btn-loader" size={16} />
            ) : Icon ? (
                <Icon className={cn("admin-btn-icon", !children && "mr-0")} size={16} />
            ) : null}
            {children}
        </button>
    );
};

export default Button;
