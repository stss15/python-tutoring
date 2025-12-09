import React from 'react';
import { Chapter } from '../types';

interface TeacherPanelProps {
    chapters: Chapter[];
    unlockedMap: Record<string, boolean>;
    onUnlock: (chapterId: string) => void;
    onLock: (chapterId: string) => void;

    // Global props
    globalUnlockedMap: Record<string, boolean>;
    onGlobalUnlock: (chapterId: string) => void;
    onGlobalLock: (chapterId: string) => void;

    onClose: () => void;
}

export const TeacherPanel: React.FC<TeacherPanelProps> = ({
    chapters,
    unlockedMap,
    onUnlock,
    onLock,
    globalUnlockedMap,
    onGlobalUnlock,
    onGlobalLock,
    onClose,
}) => {
    const handleToggle = (chapterId: string, isCurrentlyUnlocked: boolean) => {
        if (isCurrentlyUnlocked) {
            onLock(chapterId);
        } else {
            onUnlock(chapterId);
        }
    };

    const handleGlobalToggle = (chapterId: string, isCurrentlyUnlocked: boolean) => {
        if (isCurrentlyUnlocked) {
            onGlobalLock(chapterId);
        } else {
            onGlobalUnlock(chapterId);
        }
    };

    const unlockedCount = Object.values(unlockedMap).filter(Boolean).length;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
            <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
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
                            const isGlobalUnlocked = globalUnlockedMap[chapter.id] || false;

                            // Base unlocked via Session/Local? (Approximate, since unlockedMap merges global)
                            // Ideally we want to show if it is unlocked specifically in the session context vs global context
                            // But here 'unlockedMap' is the computed final state.
                            // Let's rely on the toggles.

                            return (
                                <div
                                    key={chapter.id}
                                    className={`flex items-center justify-between p-4 rounded-lg border transition-all ${isUnlocked
                                        ? 'bg-emerald-900/10 border-emerald-700/30'
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



                                    <div className="flex items-center gap-3">
                                        {/* Session Toggle */}
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Session / Local</span>
                                            <button
                                                onClick={() => handleToggle(chapter.id, isUnlocked)}
                                                className={`px-3 py-1.5 rounded-md font-medium text-sm transition-all flex items-center gap-2 ${isUnlocked
                                                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/50'
                                                    : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                                                    }`}
                                            >
                                                {isUnlocked ? 'Unlocked' : 'Locked'}
                                            </button>
                                        </div>

                                        <div className="w-px h-8 bg-[#3c3c3c] mx-2"></div>

                                        {/* Global Toggle */}
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                                                <span>🌍</span> Global
                                            </span>
                                            <button
                                                onClick={() => handleGlobalToggle(chapter.id, isGlobalUnlocked)}
                                                className={`px-3 py-1.5 rounded-md font-medium text-sm transition-all flex items-center gap-2 ${isGlobalUnlocked
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                                                    : 'bg-zinc-800 text-zinc-500 hover:bg-zinc-700 border border-zinc-700'
                                                    }`}
                                            >
                                                {isGlobalUnlocked ? 'Active' : 'Off'}
                                            </button>
                                        </div>
                                    </div>
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
        </div >
    );
};
