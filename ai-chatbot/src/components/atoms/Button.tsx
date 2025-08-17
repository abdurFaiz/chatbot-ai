import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;