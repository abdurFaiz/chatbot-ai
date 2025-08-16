// src/components/3_organisms/ChatHistorySidebar.tsx
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
        // Kontainer utama dengan transisi lebar
        <div
            className={`flex flex-col border-r border-white/75 bg-[#1e1f20] text-gray-300 p-2 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'
                }`}
        >
            {/* Bagian Atas: Menu & Search */}
            <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} mb-4`}>
                {/* Tombol hamburger ini biasanya di-handle oleh parent (Header) untuk toggle, jadi kita kosongkan onClick */}
                <button onClick={onToggleHistory}
                    className="p-2 rounded-full hover:bg-gray-700">
                    <Icon name="menu" className="w-5 h-5" />
                </button>
            </div>

            {/* Tombol Chat Baru */}
            <SidebarButton
                iconName="newChat"
                text="New chat"
                isCollapsed={isCollapsed}
                onClick={onNewChat}
            />

            {/* Daftar Sesi Chat */}
            <div className="flex-1 mt-6 space-y-2 overflow-y-auto overflow-x-hidden">
                {/* Judul "Recent" hanya muncul saat sidebar lebar */}
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

            {/* Bagian Bawah: Pengaturan */}
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