import React from 'react';
import { Chapter } from '../types';

interface TeacherPanelProps {
    chapters: Chapter[];
    unlockedMap: Record<string, boolean>;
    onUnlock: (chapterId: string) => void;
    onLock: (chapterId: string) => void;
    onClose: () => void;
}

export const TeacherPanel: React.FC<TeacherPanelProps> = ({
    chapters,
    unlockedMap,
    onUnlock,
    onLock,
    onClose,
}) => {
    const handleToggle = (chapterId: string, isCurrentlyUnlocked: boolean) => {
        if (isCurrentlyUnlocked) {
            onLock(chapterId);
        } else {
            onUnlock(chapterId);
        }
    };

    const unlockedCount = Object.values(unlockedMap).filter(Boolean).length;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100]">
            <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-[#3c3c3c] flex items-center justify-between bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
                    <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            🎓 Teacher Control Panel
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">
                            {unlockedCount} of {chapters.length} chapters unlocked
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Chapter List */}
                <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-2">
                        {chapters.map((chapter, index) => {
                            const isUnlocked = unlockedMap[chapter.id] || false;
                            return (
                                <div
                                    key={chapter.id}
                                    className={`flex items-center justify-between p-4 rounded-lg border transition-all ${isUnlocked
                                            ? 'bg-emerald-900/20 border-emerald-700/50'
                                            : 'bg-[#2d2d2d] border-[#3c3c3c]'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${isUnlocked
                                                ? 'bg-emerald-600 text-white'
                                                : 'bg-[#3c3c3c] text-gray-400'
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white">{chapter.title}</h3>
                                            <p className="text-sm text-gray-400">{chapter.description}</p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {chapter.challenges.length} challenges
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleToggle(chapter.id, isUnlocked)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${isUnlocked
                                                ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30 border border-red-600/50'
                                                : 'bg-emerald-600 text-white hover:bg-emerald-500'
                                            }`}
                                    >
                                        {isUnlocked ? (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                                Lock
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                </svg>
                                                Unlock
                                            </>
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-[#3c3c3c] bg-[#252526]">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">
                            💡 Tip: Press <kbd className="px-2 py-1 bg-[#3c3c3c] rounded text-xs">Ctrl+Shift+T</kbd> to toggle teacher mode
                        </p>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-colors"
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
