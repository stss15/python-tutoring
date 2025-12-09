import React, { useEffect, useMemo, useState } from 'react';
import { ActivityBar } from './components/ActivityBar';
import { IDELayout } from './components/IDELayout';
import { TeacherPanel } from './components/TeacherPanel';
import { SessionModal } from './components/SessionModal';
import { SessionBar } from './components/SessionBar';
import { chapters } from './data/chapters';
import { LoadingScreen } from './components/LoadingScreen';
import { PythonProvider } from './contexts/PythonContext';
import { SessionProvider, useSession } from './contexts/SessionContext';

const STORAGE_KEY = 'python_tutoring_unlocked_chapters';

// Default unlocked chapters (first 3)
const getDefaultUnlocks = (): Record<string, boolean> => {
  return chapters.reduce((acc, c, i) => ({ ...acc, [c.id]: i < 3 }), {});
};

const loadUnlockedChapters = (): Record<string, boolean> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) { console.error(e); }
  return getDefaultUnlocks();
};

const saveUnlockedChapters = (map: Record<string, boolean>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch (e) { console.error(e); }
};

const AppContent: React.FC = () => {
  const {
    isInSession,
    isTeacher,
    sessionCode,
    participants,
    sessionUnlockedChapters,
    createSession,
    joinSession,
    leaveSession,
    unlockChapter,
    lockChapter,
    activeChallenge,
    setActiveChallenge
  } = useSession();

  const [currentChapterId, setCurrentChapterId] = useState(chapters[0].id);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [localUnlockedMap, setLocalUnlockedMap] = useState<Record<string, boolean>>(loadUnlockedChapters);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showTeacherPanel, setShowTeacherPanel] = useState(false);

  // Use session unlocks in session mode, else local unlocks
  const unlockedMap = useMemo(() => {
    if (isInSession) {
      return sessionUnlockedChapters;
    }
    return localUnlockedMap;
  }, [isInSession, sessionUnlockedChapters, localUnlockedMap]);

  const currentChapter = chapters.find(c => c.id === currentChapterId) || chapters[0];
  const isCurrentLocked = useMemo(() => !unlockedMap[currentChapter.id], [unlockedMap, currentChapter.id]);

  // Reset challenge index when chapter changes
  // useEffect(() => {
  //   setCurrentChallengeIndex(0);
  // }, [currentChapterId]);

  // Sync: Teacher -> Session
  useEffect(() => {
    if (isInSession && isTeacher) {
      setActiveChallenge(currentChapterId, currentChallengeIndex);
    }
  }, [currentChapterId, currentChallengeIndex, isInSession, isTeacher]);

  // Sync: Session -> Student
  useEffect(() => {
    if (isInSession && !isTeacher && activeChallenge) {
      // Only update if different to avoid loops/jitters
      if (activeChallenge.chapterId !== currentChapterId || activeChallenge.challengeIndex !== currentChallengeIndex) {
        // console.log("Syncing to teacher:", activeChallenge);
        setCurrentChapterId(activeChallenge.chapterId);
        setCurrentChallengeIndex(activeChallenge.challengeIndex);
      }
    }
  }, [activeChallenge, isInSession, isTeacher]);

  // Handle unlock (session-scoped or local)
  const handleUnlock = (chapterId: string) => {
    if (isInSession && isTeacher) {
      unlockChapter(chapterId);
    } else {
      const newMap = { ...localUnlockedMap, [chapterId]: true };
      setLocalUnlockedMap(newMap);
      saveUnlockedChapters(newMap);
    }
  };

  // Handle lock (session-scoped or local)
  const handleLock = (chapterId: string) => {
    if (isInSession && isTeacher) {
      lockChapter(chapterId);
    } else {
      const newMap = { ...localUnlockedMap, [chapterId]: false };
      setLocalUnlockedMap(newMap);
      saveUnlockedChapters(newMap);
    }
  };

  // Handle chapter selection with lock enforcement
  const handleSelectChapter = (chapterId: string) => {
    const isLocked = !unlockedMap[chapterId];
    if (isLocked && !isAdmin) {
      // Show a brief visual feedback (could enhance with toast)
      return;
    }
    setCurrentChapterId(chapterId);
    setCurrentChallengeIndex(0);
  };

  // Secret admin activation via keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+Shift+T to toggle teacher mode
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        setIsAdmin(prev => {
          const newVal = !prev;
          if (newVal) {
            setShowTeacherPanel(true);
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

  // After intro, show session modal
  const handleIntroFinish = () => {
    setShowIntro(false);
    setShowSessionModal(true);
  };

  // Handle solo mode selection
  const handleSoloMode = () => {
    setShowSessionModal(false);
  };

  // Handle session join
  const handleJoinSession = async (code: string): Promise<boolean> => {
    const success = await joinSession(code);
    if (success) {
      setShowSessionModal(false);
    }
    return success;
  };

  // Handle session creation (teacher)
  const handleCreateSession = async (): Promise<string> => {
    const code = await createSession();
    // Don't close modal yet - show the code first
    return code;
  };

  // Handle leaving session
  const handleLeaveSession = async () => {
    await leaveSession();
    // Return to solo mode with local unlocks
    setLocalUnlockedMap(loadUnlockedChapters());
  };

  if (showIntro) {
    return <LoadingScreen studentName="Python Learner" onFinish={handleIntroFinish} />;
  }

  if (showSessionModal) {
    return (
      <SessionModal
        onSoloMode={handleSoloMode}
        onJoinSession={handleJoinSession}
        onCreateSession={handleCreateSession}
        isTeacherMode={isAdmin}
      />
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#1e1e1e]">
      {/* Session Bar */}
      {isInSession && sessionCode && (
        <SessionBar
          sessionCode={sessionCode}
          isTeacher={isTeacher}
          participantCount={Object.keys(participants).length}
          onLeave={handleLeaveSession}
        />
      )}

      {/* Teacher Mode Banner (when not in session) */}
      {isAdmin && !isInSession && (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold text-center py-1.5 shadow-lg flex items-center justify-center gap-4">
          <span>🎓 TEACHER MODE</span>
          <button
            onClick={() => setShowSessionModal(true)}
            className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors"
          >
            Start Session
          </button>
          <button
            onClick={() => setShowTeacherPanel(true)}
            className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md transition-colors"
          >
            Control Panel
          </button>
          <span className="text-white/70">(Ctrl+Shift+T to toggle)</span>
        </div>
      )}

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <ActivityBar
          chapters={chapters}
          currentChapterId={currentChapterId}
          onSelectChapter={handleSelectChapter}
          unlockedMap={unlockedMap}
          enforceLocksForStudent={!isAdmin}
        />
        <main className="flex-1 min-h-0 overflow-hidden relative">
          <IDELayout
            chapter={currentChapter}
            currentChallengeIndex={currentChallengeIndex}
            onNextChallenge={() => setCurrentChallengeIndex(i => Math.min(i + 1, currentChapter.challenges.length - 1))}
            onPrevChallenge={() => setCurrentChallengeIndex(i => Math.max(i - 1, 0))}
            onSelectChallenge={setCurrentChallengeIndex}
            isLocked={isCurrentLocked}
          />
        </main>
      </div>

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
    <SessionProvider>
      <PythonProvider>
        <AppContent />
      </PythonProvider>
    </SessionProvider>
  );
}
