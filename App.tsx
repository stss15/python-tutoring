import React, { useEffect, useMemo, useState } from 'react';
import { ActivityBar } from './components/ActivityBar';
import { IDELayout } from './components/IDELayout';
import { TeacherPanel } from './components/TeacherPanel';
import { chapters } from './data/chapters';
import { LoadingScreen } from './components/LoadingScreen';
import { ref, onValue, set } from 'firebase/database';
import { db } from './lib/firebase';
import { PythonProvider } from './contexts/PythonContext';

const TUTOR_PASSWORD = 'py123';
const ADMIN_PASSWORD = 'teachermode';
const STORAGE_KEY = 'python_tutoring_unlocked_chapters';

const loadUnlockedChapters = (): Record<string, boolean> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) { console.error(e); }
  // Default: unlock first 3 chapters for initial progression
  return chapters.reduce((acc, c, i) => ({ ...acc, [c.id]: i < 3 }), {});
};

const saveUnlockedChapters = (map: Record<string, boolean>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch (e) { console.error(e); }
};

const AppContent: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState(chapters[0].id);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [unlockedMap, setUnlockedMap] = useState<Record<string, boolean>>(loadUnlockedChapters);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showTeacherPanel, setShowTeacherPanel] = useState(false);

  const currentChapter = chapters.find(c => c.id === currentChapterId) || chapters[0];
  const isCurrentLocked = useMemo(() => !unlockedMap[currentChapter.id], [unlockedMap, currentChapter.id]);

  // Reset challenge index when chapter changes
  useEffect(() => {
    setCurrentChallengeIndex(0);
  }, [currentChapterId]);

  // Firebase Sync
  useEffect(() => {
    if (!db) return;
    const unsubscribe = onValue(ref(db, 'classrooms/default/unlockedChapters'), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUnlockedMap(prev => {
          const newMap = { ...prev, ...data };
          saveUnlockedChapters(newMap);
          return newMap;
        });
      }
    });
    return () => unsubscribe();
  }, []);

  // Admin unlock function (for passing to child components)
  const handleUnlock = (chapterId: string) => {
    const newMap = { ...unlockedMap, [chapterId]: true };
    if (isAdmin && db) {
      set(ref(db, `classrooms/default/unlockedChapters/${chapterId}`), true)
        .catch(err => console.error(err));
    }
    setUnlockedMap(newMap);
    saveUnlockedChapters(newMap);
  };

  // Admin lock function
  const handleLock = (chapterId: string) => {
    const newMap = { ...unlockedMap, [chapterId]: false };
    if (isAdmin && db) {
      set(ref(db, `classrooms/default/unlockedChapters/${chapterId}`), false)
        .catch(err => console.error(err));
    }
    setUnlockedMap(newMap);
    saveUnlockedChapters(newMap);
  };

  // Secret admin activation via keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+T to toggle teacher mode
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        setIsAdmin(prev => {
          const newVal = !prev;
          if (newVal) {
            setShowTeacherPanel(true); // Auto-open panel when activating
          } else {
            setShowTeacherPanel(false);
          }
          return newVal;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (showIntro) {
    return <LoadingScreen studentName="Python Learner" onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#1e1e1e]">
      <ActivityBar
        chapters={chapters}
        currentChapterId={currentChapterId}
        onSelectChapter={setCurrentChapterId}
        unlockedMap={unlockedMap}
      />
      <main className="flex-1 h-full overflow-hidden relative">
        {isAdmin && (
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold text-center py-1.5 z-50 shadow-lg flex items-center justify-center gap-4">
            <span>🎓 TEACHER MODE ACTIVE</span>
            <button
              onClick={() => setShowTeacherPanel(true)}
              className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors"
            >
              Open Control Panel
            </button>
            <span className="text-white/70">(Ctrl+Shift+T to toggle)</span>
          </div>
        )}
        <IDELayout
          chapter={currentChapter}
          currentChallengeIndex={currentChallengeIndex}
          onNextChallenge={() => setCurrentChallengeIndex(i => Math.min(i + 1, currentChapter.challenges.length - 1))}
          onPrevChallenge={() => setCurrentChallengeIndex(i => Math.max(i - 1, 0))}
          onSelectChallenge={setCurrentChallengeIndex}
          isLocked={isCurrentLocked}
        />
      </main>

      {/* Teacher Control Panel Modal */}
      {isAdmin && showTeacherPanel && (
        <TeacherPanel
          chapters={chapters}
          unlockedMap={unlockedMap}
          onUnlock={handleUnlock}
          onLock={handleLock}
          onClose={() => setShowTeacherPanel(false)}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <PythonProvider>
      <AppContent />
    </PythonProvider>
  );
}

