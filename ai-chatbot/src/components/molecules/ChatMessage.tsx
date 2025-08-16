import React from 'react';
import type { Message } from '../../types';
import Avatar from '../atoms/Avatar';

interface ChatMessageProps {
    message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.role === 'user';

    const wrapperClass = `flex ${isUser ? 'justify-end' : 'justify-between'} animate-fade-in`;
    const bubbleClass = `${isUser
        ? 'max-w-2xl px-4 py-2 rounded-l-2xl rounded-br-2xl rounded-tr-xs shadow-2xl backdrop-blur-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-purple-500/25'
        : 'bg-transparent text-white'
        }`;

    return (
        <div className={wrapperClass}>
            <div className="max-w-8xl">
                <div className={`group relative ${isUser ? 'ml-12' : 'mr-12'}`}>
                    <div className={bubbleClass}>
                        <div className="flex items-start gap-3">
                            <Avatar role={message.role} />
                            <div className="flex-1">
                                <p className="leading-relaxed text-base">{message.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`text-xs text-gray-400 mt-2 px-2 ${isUser ? 'text-right' : 'text-left'}`}>
                    {message.timestamp}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;