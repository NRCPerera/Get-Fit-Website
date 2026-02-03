import React from 'react';
import { cn } from '../../utils';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ children, className, hover = false, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "admin-card",
                hover && "admin-card-hover",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
