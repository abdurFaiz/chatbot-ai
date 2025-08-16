import React from 'react';
import type { Chat } from '../../types';
import Icon from '../atoms/Icon'; // Impor komponen Icon

interface SessionItemProps {
    session: Chat;
    isActive: boolean;
    isCollapsed: boolean;
    onLoad: () => void;
    onDelete: () => void;
}

const SessionItem: React.FC<SessionItemProps> = ({ session, isActive, isCollapsed, onLoad, onDelete }) => {
    if (isCollapsed) {
        return null;
    }
    const handleDeleteClick = (e: React.MouseEvent) => {
        // Hentikan event agar tidak "bubble up" ke div utama dan memicu onLoad
        e.stopPropagation();
        onDelete();
    };
    const activeClass = isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700';

    return (
        <div
            onClick={onLoad}
            className={`group w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg cursor-pointer transition-colors duration-200 ${activeClass}`}
            title={session.title}
        >
            <div className="flex-1 min-w-0">
                <p className="font-medium text-sm whitespace-nowrap truncate">
                    {session.title}
                </p>
            </div>

            <button
                onClick={handleDeleteClick}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 rounded-md hover:bg-red-500/50 flex-shrink-0"
                aria-label={`Delete chat: ${session.title}`}
            >
                <Icon name="trash" className="w-4 h-4" />
            </button>
        </div>
    );
};

export default SessionItem;