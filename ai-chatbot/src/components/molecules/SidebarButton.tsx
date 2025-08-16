import React from 'react';
import Icon, { type IconName } from '../atoms/Icon';

interface SidebarButtonProps {
    iconName: IconName;
    text: string;
    isCollapsed: boolean;
    onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ iconName, text, isCollapsed, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center w-full text-left p-3 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors duration-200"
        >
            <Icon name={iconName} className="w-5 h-5 flex-shrink-0" />
            <span
                className={`ml-4 text-sm font-medium transition-opacity duration-200 whitespace-nowrap ${isCollapsed ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                {text}
            </span>
        </button>
    );
};

export default SidebarButton;