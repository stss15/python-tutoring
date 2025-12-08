import React from 'react';
import { Chapter } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  currentChapterId: string;
  onSelectChapter: (id: string) => void;
  unlockedMap: Record<string, boolean>;
}

export const Sidebar: React.FC<SidebarProps> = ({ chapters, currentChapterId, onSelectChapter, unlockedMap }) => {
  const totalUnlocked = Object.values(unlockedMap).filter(Boolean).length;
  const progress = (totalUnlocked / chapters.length) * 100;

  return (
    <div className="w-72 bg-white text-slate-700 flex-shrink-0 h-screen overflow-y-auto border-r border-slate-200">
      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
            <span className="text-xl">🐍</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900 tracking-tight">Python Mastery</h1>
            <p className="text-xs text-slate-500">Learn to Code</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>Progress</span>
            <span>{totalUnlocked} of {chapters.length} unlocked</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chapter List */}
      <nav className="p-3">
        <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
          Chapters
        </div>
        {chapters.map((chapter, index) => {
          const isUnlocked = unlockedMap[chapter.id];
          const isCurrent = currentChapterId === chapter.id;

          return (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              className={`w-full text-left px-3 py-3 rounded-xl mb-1 text-sm transition-all duration-200 flex items-center gap-3 group ${isCurrent
                  ? 'bg-slate-100 text-slate-900 shadow-sm border border-slate-200'
                  : 'hover:bg-slate-50 text-slate-600'
                }`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${isCurrent
                  ? 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                  : isUnlocked
                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                    : 'bg-slate-100 text-slate-400 border border-slate-200'
                }`}>
                {isUnlocked ? index + 1 : '🔒'}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-medium truncate ${isCurrent ? 'text-slate-900' : 'text-slate-700'}`}>
                  {chapter.title}
                </div>
                <div className={`text-xs truncate ${isCurrent ? 'text-slate-500' : 'text-slate-400'}`}>
                  {chapter.challenges.length} challenges
                </div>
              </div>
              {isUnlocked && !isCurrent && (
                <div className="text-emerald-500 text-xs">✓</div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 mt-auto border-t border-slate-100">
        <div className="text-xs text-slate-400 text-center">
          Mr Stewart Python Tutoring
        </div>
      </div>
    </div>
  );
};
