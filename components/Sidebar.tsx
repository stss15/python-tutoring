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
    <div className="w-72 bg-[#0a0a0f] text-slate-300 flex-shrink-0 h-screen overflow-y-auto border-r border-slate-800/50">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/50">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-xl">🐍</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">Python Mastery</h1>
            <p className="text-xs text-slate-500">Learn to Code</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>Progress</span>
            <span>{totalUnlocked} of {chapters.length} unlocked</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      
      {/* Chapter List */}
      <nav className="p-3">
        <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wider px-3 py-2">
          Chapters
        </div>
        {chapters.map((chapter, index) => {
          const isUnlocked = unlockedMap[chapter.id];
          const isCurrent = currentChapterId === chapter.id;
          
          return (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              className={`w-full text-left px-3 py-3 rounded-xl mb-1 text-sm transition-all duration-200 flex items-center gap-3 group ${
                isCurrent
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/20'
                  : 'hover:bg-slate-800/50'
              }`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                isCurrent 
                  ? 'bg-white/20 text-white' 
                  : isUnlocked 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-slate-800 text-slate-500 border border-slate-700'
              }`}>
                {isUnlocked ? index + 1 : '🔒'}
              </div>
              <div className="flex-1 min-w-0">
                <div className={`font-medium truncate ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                  {chapter.title}
                </div>
                <div className={`text-xs truncate ${isCurrent ? 'text-blue-200' : 'text-slate-500'}`}>
                  {chapter.challenges.length} challenges
                </div>
              </div>
              {isUnlocked && !isCurrent && (
                <div className="text-emerald-400 text-xs">✓</div>
              )}
            </button>
          );
        })}
      </nav>
      
      {/* Footer */}
      <div className="p-4 mt-auto border-t border-slate-800/50">
        <div className="text-xs text-slate-600 text-center">
          Mr Stewart Python Tutoring
        </div>
      </div>
    </div>
  );
};
