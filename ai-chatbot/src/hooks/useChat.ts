import { useState, useEffect } from "react";
import type { Chat, Message } from "../types";
import { getAiReesponce, generateTitleForChat } from "../services/openaiService";

export const useChat = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [chatSessions, setChatSessions] = useState<Chat[]>([]);
    const [currentSessionId, setCurrentSessionId] = useState<string>('');

    useEffect(() => {
        const savedSessions = JSON.parse(sessionStorage.getItem('chatSessions') || '[]');
        setChatSessions(savedSessions);
        if (savedSessions.length === 0) {
            startNewChat();
        } else {
            const mostRecent = savedSessions[savedSessions.length - 1];
            setCurrentSessionId(mostRecent.id);
            setChatHistory(mostRecent.messages);
        }
    }, [])

    useEffect(() => {
        if (chatSessions.length > 0) {
            sessionStorage.setItem('chatSessions', JSON.stringify(chatSessions));
        }
    }, [chatSessions]);

    useEffect(() => {
        if (currentSessionId) {
            setChatSessions(prev => prev.map(session =>
                session.id === currentSessionId
                    ? { ...session, messages: chatHistory }
                    : session
            ));
        }
    }, [chatHistory, currentSessionId]);

    const getCurrentTimestamp = (): string => new Date().toLocaleString('id-ID');

    const startNewChat = () => {
        const newSession: Chat = {
            id: Date.now().toString(),
            title: `New Chat`,
            messages: [],
            createdAt: new Date().toISOString()
        };
        setChatSessions(prev => [...prev, newSession]);
        setCurrentSessionId(newSession.id);
        setChatHistory([]);
    };

    const loadChatSession = (sessionId: string) => {
        const session = chatSessions.find(s => s.id === sessionId);
        if (session) {
            setCurrentSessionId(sessionId);
            setChatHistory(session.messages);
        }
    };

    const deleteChatSession = (sessionId: string) => {
        const updatedSessions = chatSessions.filter(s => s.id !== sessionId);
        setChatSessions(updatedSessions);
        if (currentSessionId === sessionId) {
            if (updatedSessions.length > 0) {
                loadChatSession(updatedSessions[updatedSessions.length - 1].id);
            } else {
                startNewChat();
            }
        }
    };

    const handleUserInput = async () => {
        if (userInput.trim() === '') return;

        const userMessage: Message = {
            role: 'user',
            content: userInput,
            timestamp: getCurrentTimestamp()
        };
        const previousChatHistory = [...chatHistory];
        const updatedHistory = [...previousChatHistory, userMessage];

        setChatHistory(updatedHistory);
        setUserInput('');
        setIsLoading(true);

        if (previousChatHistory.length === 0) {
            generateTitleForChat(userMessage.content).then(newTitle => {
                setChatSessions(prevSessions =>
                    prevSessions.map(session =>
                        session.id === currentSessionId
                            ? { ...session, title: newTitle } 
                            : session
                    )
                );
            });
        }

        const aiResponseContent = await getAiReesponce(updatedHistory);

        const aiMessage: Message = {
            role: 'assistant',
            content: aiResponseContent,
            timestamp: getCurrentTimestamp()
        };
        setChatHistory(prev => [...prev, aiMessage]);
        setIsLoading(false);
    };

    return {
        userInput,
        setUserInput,
        chatHistory,
        isLoading,
        chatSessions,
        currentSessionId,
        startNewChat,
        loadChatSession,
        deleteChatSession,
        handleUserInput
    };
}