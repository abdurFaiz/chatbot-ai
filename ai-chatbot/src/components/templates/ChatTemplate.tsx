// src/components/templates/ChatTemplate.tsx

import React from 'react';

interface ChatTemplateProps {
    sidebar: React.ReactNode;
    header: React.ReactNode;
    chatArea: React.ReactNode;
    messageInput: React.ReactNode;
    isChatEmpty: boolean;
    showSidebar: boolean;
}

const ChatTemplate: React.FC<ChatTemplateProps> = ({
    sidebar,
    header,
    chatArea,
    messageInput,
    isChatEmpty,
    showSidebar
}) => {
    return (
        <div className="relative flex w-full h-screen bg-[#2d2d2d] font-sans overflow-hidden">

            <div className={`
                absolute top-0 left-0 h-full z-20 
                md:static md:translate-x-0 
                transition-transform duration-300 ease-in-out
                ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
            `}>
                {sidebar}
            </div>

            <div className="flex-1 flex flex-col overflow-y-hidden">

                <div className="md:hidden">
                    {header}
                </div>

                {isChatEmpty ? (
                    <main className="justify-between lg:justify-center flex-1 flex flex-col items-center gap-6 p-4 text-center">
                        <h1 className="text-2xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Apa yang bisa saya bantu hari ini?
                        </h1>
                        <div className="w-full max-w-2xl">
                            {messageInput}
                        </div>
                    </main>
                ) : (
                    <main className="flex-1 flex flex-col overflow-y-hidden">
                        {chatArea}
                        {messageInput}
                    </main>
                )}
            </div>
        </div>
    );
};

export default ChatTemplate;