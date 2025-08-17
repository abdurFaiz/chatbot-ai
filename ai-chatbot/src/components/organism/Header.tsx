import React from 'react';
import Icon from '../atoms/Icon';

interface HeaderProps {
    onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
    return (
        <header className=" p-4 ">
            <div className="flex justify-between items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className=" rounded-full text-white"
                    aria-label="Toggle Sidebar"
                >
                    <Icon name='menu' className="w-6 h-6" />
                </button>

                <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    AI Chatbot Assistant
                </h1>
            </div>
        </header>
    );
};

export default Header;