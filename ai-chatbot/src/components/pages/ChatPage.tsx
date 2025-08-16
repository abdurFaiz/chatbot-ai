import React, { useState } from 'react';
import { useChat } from '../../hooks/useChat';
import ChatTemplate from '../templates/ChatTemplate';
import Header from '../organism/Header';
import ChatHistorySidebar from '../organism/ChatHistorySidebar';
import ChatArea from '../organism/ChatArea';
import MessageInput from '../organism/MessageInput';

const ChatPage: React.FC = () => {
    const [showHistory, setShowHistory] = useState<boolean>(true);

    const {
        userInput,
        setUserInput,
        chatHistory,
        isLoading,
        chatSessions,
        currentSessionId,
        startNewChat,
        loadChatSession,
        deleteChatSession,
        handleUserInput,
    } = useChat();

    return (
        <ChatTemplate
            sidebar={
                <ChatHistorySidebar
                    show={showHistory}
                    sessions={chatSessions}
                    currentSessionId={currentSessionId}
                    onNewChat={startNewChat}
                    onLoadSession={loadChatSession}
                    onDeleteSession={deleteChatSession}
                    onToggleHistory={() => setShowHistory(prev => !prev)}
                />
            }
            header={
                <Header
                    onNewChat={startNewChat}
                />
            }
            chatArea={
                <ChatArea history={chatHistory} isLoading={isLoading} />
            }
            messageInput={
                <MessageInput
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onSend={handleUserInput}
                    isLoading={isLoading}
                />
            }
        />
    );
};

export default ChatPage;