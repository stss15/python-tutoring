import React, { useEffect, useMemo, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChapterView } from './components/ChapterView';
import { chapters } from './data/chapters';
import { LoadingScreen } from './components/LoadingScreen';

const TUTOR_PASSWORD = 'py123';
const STORAGE_KEY = 'python_tutoring_unlocked_chapters';

// Load unlocked chapters from localStorage (persists globally)
const loadUnlockedChapters = (): Record<string, boolean> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load unlocked chapters:', e);
  }
  // Default: only first chapter unlocked
  return chapters.reduce((acc, chapter, index) => {
    acc[chapter.id] = index === 0;
    return acc;
  }, {} as Record<string, boolean>);
};

// Save unlocked chapters to localStorage
const saveUnlockedChapters = (unlockedMap: Record<string, boolean>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedMap));
  } catch (e) {
    console.error('Failed to save unlocked chapters:', e);
  }
};

const App: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState(chapters[0].id);
  const [showIntro, setShowIntro] = useState(true);
  const [unlockedMap, setUnlockedMap] = useState<Record<string, boolean>>(loadUnlockedChapters);

  const currentChapter = chapters.find(c => c.id === currentChapterId) || chapters[0];
  const isCurrentLocked = useMemo(
    () => !unlockedMap[currentChapter.id],
    [unlockedMap, currentChapter.id],
  );

  // Persist unlocked state whenever it changes
  useEffect(() => {
    saveUnlockedChapters(unlockedMap);
  }, [unlockedMap]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const unlockChapter = (passwordAttempt: string) => {
    if (passwordAttempt.trim() === TUTOR_PASSWORD) {
      const newMap = { ...unlockedMap, [currentChapter.id]: true };
      setUnlockedMap(newMap);
      return true;
    }
    return false;
  };

  const lockChapter = (passwordAttempt: string) => {
    if (passwordAttempt.trim() === TUTOR_PASSWORD) {
      const newMap = { ...unlockedMap, [currentChapter.id]: false };
      setUnlockedMap(newMap);
      return true;
    }
    return false;
  };

  // Function to verify password (for solutions)
  const verifyPassword = (passwordAttempt: string) => {
    return passwordAttempt.trim() === TUTOR_PASSWORD;
  };

  if (showIntro) {
    return <LoadingScreen studentName="Python Learner" onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      <Sidebar 
        chapters={chapters} 
        currentChapterId={currentChapterId} 
        onSelectChapter={setCurrentChapterId}
        unlockedMap={unlockedMap}
      />
      <main className="flex-1 h-full overflow-hidden">
        <ChapterView
          key={currentChapter.id}
          chapter={currentChapter}
          isLocked={isCurrentLocked}
          onUnlock={unlockChapter}
          onLock={lockChapter}
          verifyPassword={verifyPassword}
        />
      </main>
    </div>
  );
};

export default App;
