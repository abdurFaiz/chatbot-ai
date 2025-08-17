import React from 'react';
import type { Message } from '../../types';
import ChatMessage from '../molecules/ChatMessage';
import LoadingIndicator from '../molecules/LoadingIndicator';

interface ChatAreaProps {
    history: Message[];
    isLoading: boolean;
}

const ChatArea: React.FC<ChatAreaProps> = ({ history, isLoading }) => (
    <main className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {history.map((message, index) => (
            <ChatMessage key={index} message={message} />
        ))}
        {isLoading && <LoadingIndicator />}
    </main>
);

export default ChatArea;