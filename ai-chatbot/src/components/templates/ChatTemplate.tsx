import React from 'react';

interface ChatTemplateProps {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    chatArea: React.ReactNode;
    messageInput: React.ReactNode;
}

const ChatTemplate: React.FC<ChatTemplateProps> = ({ sidebar, header, chatArea, messageInput }) => {
    return (
        <div className="flex w-full h-screen bg-gradient-to-br from-[#1f1f1f] to-[#191919] font-sans overflow-hidden">

            {sidebar}

            <div className="flex-1 flex flex-col relative z-10">
                {/* {header}     */}
                {chatArea}
                {messageInput}
            </div>
        </div>
    );
};

export default ChatTemplate;