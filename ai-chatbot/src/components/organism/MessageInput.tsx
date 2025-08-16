import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon'; 

interface MessageInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSend: () => void;
    isLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ value, onChange, onSend, isLoading }) => {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isLoading) {
            onSend();
        }
    };

    const isDisabled = isLoading || !value.trim();

    return (
        <div className="p-4 ">
            <div className="max-w-4xl mx-auto">
                <div className="relative group">
                    <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden shadow-2xl">
                        <Input
                            type="text"
                            value={value}
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Ketik pesan Anda di sini..."
                            disabled={isLoading}
                        />
                        <Button
                            onClick={onSend}
                            disabled={isDisabled}
                            className={`m-2 px-8 py-3 rounded-full ${isDisabled
                                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105'
                                }`}
                        >
                            {isLoading ? <Icon name="loading" /> : <Icon name="send" />}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageInput;