import React from 'react';

interface AvatarProps {
    role: 'user' | 'assistant';
}

const Avatar: React.FC<AvatarProps> = ({ role }) => {
    const isUser = role === 'user';
    const style = isUser
        ? 'bg-white/50'
        : 'bg-gradient-to-r from-cyan-400 to-blue-500';

    return (
        <div className={`size-auto rounded-full flex-shrink-0 flex items-center justify-center text-sm ${style}`}>
            {isUser ? '' : '🤖'}
        </div>
    );
};

export default Avatar;