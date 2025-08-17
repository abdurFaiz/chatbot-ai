import React from 'react';
import type { Chat } from '../../types';
import Icon from '../atoms/Icon';
import SidebarButton from '../molecules/SidebarButton';
import SessionItem from '../molecules/SessionItem';

interface ChatHistorySidebarProps {
    show: boolean;
    sessions: Chat[];
    currentSessionId: string;
    onNewChat: () => void;
    onLoadSession: (id: string) => void;
    onDeleteSession: (id: string) => void;
    onToggleHistory: () => void;
}

const ChatHistorySidebar: React.FC<ChatHistorySidebarProps> = ({
    show,
    sessions,
    currentSessionId,
    onNewChat,
    onLoadSession,
    onToggleHistory,
    onDeleteSession
}) => {
    const isCollapsed = !show;

    return (
        <div
            className={`flex h-screen flex-col border-r border-white/10 bg-[#1e1f20] text-gray-300 p-2 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'
                }`}
        >
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} mb-4`}>
                <button onClick={onToggleHistory}
                    className="p-2 rounded-full hover:bg-gray-700">
                    <Icon name="menu" className="w-5 h-5" />
                </button>
            </div>

            <SidebarButton
                iconName="newChat"
                text="New chat"
                isCollapsed={isCollapsed}
                onClick={onNewChat}
            />

            <div className="flex-1 mt-6 space-y-2 overflow-y-auto overflow-x-hidden">
                <h3 className={`px-3 text-xs font-bold text-gray-500 uppercase tracking-wider ${isCollapsed ? 'hidden' : 'block'}`}>
                    Recent
                </h3>
                {sessions.map((session) => (
                    <SessionItem
                        key={session.id}
                        session={session}
                        isActive={session.id === currentSessionId}
                        isCollapsed={isCollapsed}
                        onLoad={() => onLoadSession(session.id)}
                        onDelete={() => onDeleteSession(session.id)}
                    />
                ))}
            </div>

            <div className="mt-auto">
                <SidebarButton
                    iconName="settings"
                    text="Settings & help"
                    isCollapsed={isCollapsed}
                />
            </div>
        </div>
    );
};

export default ChatHistorySidebar;