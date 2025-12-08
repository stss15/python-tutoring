import React, { useState } from 'react';
import { Chapter } from '../types';

interface ActivityBarProps {
    chapters: Chapter[];
    currentChapterId: string;
    onSelectChapter: (id: string) => void;
    unlockedMap: Record<string, boolean>;
}

export const ActivityBar: React.FC<ActivityBarProps> = ({
    chapters,
    currentChapterId,
    onSelectChapter,
    unlockedMap
}) => {
    const [showChapterList, setShowChapterList] = useState(false);

    const completedCount = Object.values(unlockedMap).filter(Boolean).length;
    const progressPercent = Math.round((completedCount / chapters.length) * 100);

    return (
        <>
            {/* Slim Activity Bar */}
            <div className="w-14 bg-[#252526] text-slate-400 flex flex-col items-center py-4 border-r border-[#3c3c3c] relative z-30">
                {/* App Logo */}
                <div
                    className="mb-6 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-xl text-white shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    title="Python Tutoring"
                >
                    🐍
                </div>

                {/* Chapters Toggle */}
                <button
                    onClick={() => setShowChapterList(!showChapterList)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-all relative ${showChapterList
                            ? 'bg-blue-600 text-white'
                            : 'hover:bg-[#3c3c3c] hover:text-white'
                        }`}
                    title="Chapters"
                >
                    <span className="text-xl">📚</span>
                    {/* Progress Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle
                            cx="18" cy="18" r="16"
                            fill="none"
                            stroke="#3c3c3c"
                            strokeWidth="2"
                        />
                        <circle
                            cx="18" cy="18" r="16"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="2"
                            strokeDasharray={`${progressPercent} 100`}
                            strokeLinecap="round"
                            className="transition-all duration-500"
                        />
                    </svg>
                </button>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Settings (Future) */}
                <button
                    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#3c3c3c] hover:text-white transition-all"
                    title="Settings"
                >
                    <span className="text-xl">⚙️</span>
                </button>

                {/* Help */}
                <button
                    className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#3c3c3c] hover:text-white transition-all"
                    title="Keyboard Shortcuts: Ctrl+Enter to Run"
                >
                    <span className="text-xl">❓</span>
                </button>
            </div>

            {/* Expandable Chapter List Drawer */}
            {showChapterList && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/40 z-20"
                        onClick={() => setShowChapterList(false)}
                    />

                    {/* Drawer */}
                    <div className="fixed left-14 top-0 h-full w-80 bg-[#1e1e1e] shadow-2xl border-r border-[#3c3c3c] z-30 animate-slide-in overflow-hidden flex flex-col">
                        {/* Drawer Header */}
                        <div className="p-5 border-b border-[#3c3c3c] bg-[#252526]">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-white text-lg">Curriculum</h3>
                                <button
                                    onClick={() => setShowChapterList(false)}
                                    className="text-slate-500 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-2 bg-[#3c3c3c] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full transition-all duration-500"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                                <span className="text-xs text-slate-400 font-mono">{progressPercent}%</span>
                            </div>
                        </div>

                        {/* Chapter List */}
                        <div className="flex-1 overflow-y-auto p-3">
                            {chapters.map((chapter, index) => {
                                const isUnlocked = unlockedMap[chapter.id];
                                const isCurrent = currentChapterId === chapter.id;

                                return (
                                    <button
                                        key={chapter.id}
                                        onClick={() => {
                                            onSelectChapter(chapter.id);
                                            setShowChapterList(false);
                                        }}
                                        className={`w-full text-left p-4 rounded-xl mb-2 transition-all flex items-start gap-3 group ${isCurrent
                                                ? 'bg-blue-600/20 border border-blue-500/30'
                                                : 'hover:bg-[#2a2a2a] border border-transparent'
                                            }`}
                                    >
                                        {/* Chapter Number */}
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${isCurrent
                                                ? 'bg-blue-600 text-white'
                                                : isUnlocked
                                                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
                                                    : 'bg-[#3c3c3c] text-slate-500'
                                            }`}>
                                            {isUnlocked ? index + 1 : '🔒'}
                                        </div>

                                        {/* Chapter Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className={`font-medium truncate text-sm ${isCurrent ? 'text-white' : 'text-slate-300'
                                                }`}>
                                                {chapter.title}
                                            </div>
                                            <div className="text-xs text-slate-500 truncate mt-0.5">
                                                {chapter.challenges.length} challenges
                                            </div>
                                        </div>

                                        {/* Status */}
                                        {isUnlocked && !isCurrent && (
                                            <span className="text-emerald-500 text-sm">✓</span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Drawer Footer */}
                        <div className="p-4 border-t border-[#3c3c3c] bg-[#252526]">
                            <div className="text-xs text-slate-500 text-center">
                                Mr. Stewart's Python Tutoring
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Animation Styles */}
            <style>{`
        @keyframes slide-in {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.2s ease-out;
        }
      `}</style>
        </>
    );
};
