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
        <div className="p-0 md:p-4 ">
            <div className="max-w-3xl mx-auto">
                <div className="relative group">
                    <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full overflow-hidden shadow-2xl">
                        <Input
                            type="text"
                            value={value}
                            onChange={onChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Ketik apapun yg anda inginkan di sini..."
                            disabled={isLoading}
                        />
                        <Button
                            onClick={onSend}
                            disabled={isDisabled}
                            className={`m-1 px-2 py-1 ${isDisabled
                                    ? 'bg-[#1f1f1f] text-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white '
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