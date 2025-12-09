import React from 'react';

interface SessionBarProps {
    sessionCode: string;
    isTeacher: boolean;
    participantCount: number;
    onLeave: () => void;
}

export const SessionBar: React.FC<SessionBarProps> = ({
    sessionCode,
    isTeacher,
    participantCount,
    onLeave
}) => {
    const copyCode = () => {
        navigator.clipboard.writeText(sessionCode);
    };

    return (
        <div className="h-8 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between px-4 text-white text-sm z-50 shadow-lg">
            <div className="flex items-center gap-4">
                {isTeacher ? (
                    <>
                        <div className="flex items-center gap-2">
                            <span className="opacity-80">🎓</span>
                            <span className="font-medium">Session:</span>
                            <button
                                onClick={copyCode}
                                className="px-2 py-0.5 bg-white/20 hover:bg-white/30 rounded font-mono tracking-wider transition-colors"
                                title="Click to copy"
                            >
                                {sessionCode}
                            </button>
                        </div>
                        <div className="h-4 w-px bg-white/30" />
                        <span className="opacity-80">
                            {participantCount - 1} student{participantCount - 1 !== 1 ? 's' : ''} connected
                        </span>
                    </>
                ) : (
                    <>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span>Connected to session</span>
                        </div>
                        <div className="h-4 w-px bg-white/30" />
                        <span className="opacity-80">Code: {sessionCode}</span>
                    </>
                )}
            </div>

            <button
                onClick={onLeave}
                className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition-colors"
            >
                Leave Session
            </button>
        </div>
    );
};
