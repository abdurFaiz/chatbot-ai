import React from 'react';

const LoadingIndicator: React.FC = () => {
    return (
        <div className="flex justify-start animate-fade-in">
            <div className="max-w-2xl mr-12">
                <div className="bg-white/20 backdrop-blur-sm text-gray-300 rounded-2xl shadow-2xl px-6 py-4 border border-white/20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                            🤖
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">AI sedang mengetik</span>
                            <div className="flex items-center space-x-1 ">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-spin"></div>
                                <div className="w-2 h-2 bg-pink-400 rounded-full animate-spin delay-100"></div>
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-spin delay-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingIndicator;