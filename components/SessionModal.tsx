import React, { useState } from 'react';

interface SessionModalProps {
    onSoloMode: () => void;
    onJoinSession: (code: string) => Promise<boolean>;
    onCreateSession: () => Promise<string>;
    isTeacherMode: boolean;
}

export const SessionModal: React.FC<SessionModalProps> = ({
    onSoloMode,
    onJoinSession,
    onCreateSession,
    isTeacherMode
}) => {
    const [mode, setMode] = useState<'choose' | 'join' | 'create'>('choose');
    const [joinCode, setJoinCode] = useState('');
    const [createdCode, setCreatedCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleJoinSubmit = async () => {
        if (joinCode.length !== 6) {
            setError('Please enter a 6-character code');
            return;
        }

        setIsLoading(true);
        setError('');

        const success = await onJoinSession(joinCode.toUpperCase());
        if (!success) {
            setError('Session not found. Please check the code.');
        }
        setIsLoading(false);
    };

    const handleCreateSession = async () => {
        setIsLoading(true);
        setError('');
        try {
            const code = await onCreateSession();
            setCreatedCode(code);
            setMode('create');
        } catch (err) {
            setError('Failed to create session');
        }
        setIsLoading(false);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(createdCode);
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center z-50">
            <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-[#3c3c3c]">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl">🐍</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Python Tutoring</h1>
                            <p className="text-sm text-slate-400">Choose how you'd like to learn</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {mode === 'choose' && (
                        <div className="space-y-4">
                            {/* Solo Mode Option */}
                            <button
                                onClick={onSoloMode}
                                className="w-full p-5 bg-[#252526] hover:bg-[#2d2d2d] border border-[#3c3c3c] rounded-xl text-left transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-2xl">📚</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Practice on Your Own</h3>
                                        <p className="text-sm text-slate-400">Learn at your own pace, offline</p>
                                    </div>
                                </div>
                            </button>

                            {/* Join Session Option */}
                            <button
                                onClick={() => setMode('join')}
                                className="w-full p-5 bg-[#252526] hover:bg-[#2d2d2d] border border-[#3c3c3c] rounded-xl text-left transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-2xl">🔗</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Join a Session</h3>
                                        <p className="text-sm text-slate-400">Enter a code from your teacher</p>
                                    </div>
                                </div>
                            </button>

                            {/* Teacher: Create Session Option */}
                            {isTeacherMode && (
                                <button
                                    onClick={handleCreateSession}
                                    disabled={isLoading}
                                    className="w-full p-5 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 hover:from-indigo-600/30 hover:to-purple-600/30 border border-indigo-500/30 rounded-xl text-left transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <span className="text-2xl">🎓</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {isLoading ? 'Creating...' : 'Start a Teaching Session'}
                                            </h3>
                                            <p className="text-sm text-slate-400">Generate a code for students to join</p>
                                        </div>
                                    </div>
                                </button>
                            )}
                        </div>
                    )}

                    {mode === 'join' && (
                        <div className="space-y-4">
                            <button
                                onClick={() => { setMode('choose'); setError(''); }}
                                className="text-slate-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
                            >
                                ← Back
                            </button>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Enter Session Code
                                </label>
                                <input
                                    type="text"
                                    value={joinCode}
                                    onChange={(e) => setJoinCode(e.target.value.toUpperCase().slice(0, 6))}
                                    placeholder="ABC123"
                                    className="w-full px-4 py-4 bg-[#252526] border border-[#3c3c3c] rounded-xl text-white text-2xl font-mono tracking-[0.5em] text-center focus:outline-none focus:border-blue-500 transition-colors uppercase"
                                    autoFocus
                                />
                            </div>

                            {error && (
                                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleJoinSubmit}
                                disabled={isLoading || joinCode.length !== 6}
                                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Joining...' : 'Join Session'}
                            </button>
                        </div>
                    )}

                    {mode === 'create' && (
                        <div className="space-y-4 text-center">
                            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-3xl">✓</span>
                            </div>

                            <h3 className="text-lg font-semibold text-white">Session Created!</h3>
                            <p className="text-sm text-slate-400">Share this code with your student:</p>

                            <div className="relative">
                                <div className="px-6 py-5 bg-[#252526] border border-[#3c3c3c] rounded-xl text-3xl font-mono tracking-[0.5em] text-emerald-400 text-center">
                                    {createdCode}
                                </div>
                                <button
                                    onClick={copyToClipboard}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-[#3c3c3c] rounded-lg transition-colors"
                                    title="Copy to clipboard"
                                >
                                    <span className="text-lg">📋</span>
                                </button>
                            </div>

                            <button
                                onClick={onSoloMode}
                                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-semibold rounded-xl transition-all"
                            >
                                Continue to Dashboard
                            </button>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-[#252526] border-t border-[#3c3c3c]">
                    <p className="text-xs text-slate-500 text-center">
                        Mr Stewart Python Tutoring
                    </p>
                </div>
            </div>
        </div>
    );
};
