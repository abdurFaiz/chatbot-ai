import React from 'react';
import Button from '../atoms/Button'; 

interface HeaderProps {
    onNewChat: () => void;
}

const Header: React.FC<HeaderProps> = ({  onNewChat }) => {
    return (
        <header className="backdrop-blur-xl bg-white/10 border-b border-white/20 p-4 shadow-lg shrink-0">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            AI Chatbot Modern
                        </h1>
                        <p className="text-sm text-gray-300">Powered by OpenAI GPT</p>
                    </div>
                </div>

                <Button
                    onClick={onNewChat}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl hover:shadow-green-500/25 hover:scale-105 hidden sm:flex"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-lg">✨</span>
                        Chat Baru
                    </span>
                </Button>
            </div>
        </header>
    );
};

export default Header;