import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input
            className={`flex-1 bg-transparent text-white placeholder-gray-300 py-2 px-4 focus:outline-none ${className}`}
            {...props}
        />
    );
};

export default Input;