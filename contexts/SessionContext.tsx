import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { ref, onValue, set, get, remove } from 'firebase/database';
import { db } from '../lib/firebase';

// Storage key for local sessions
const LOCAL_SESSIONS_KEY = 'python_tutoring_sessions';

// Generate a random 6-character alphanumeric code
const generateSessionCode = (): string => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Exclude confusable chars (0/O, 1/I/L)
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
};

// Generate a simple unique ID for participants
const generateParticipantId = (): string => {
    return 'user_' + Math.random().toString(36).substring(2, 11);
};

interface Participant {
    role: 'teacher' | 'student';
    joinedAt: number;
}

interface StudentCode {
    content: string;
    chapterId: string;
    challengeIndex: number;
    lastUpdated: number;
}

interface TestResult {
    input: string;
    expected: string;
    actual: string;
    passed: boolean;
    error?: string;
}

interface SessionData {
    createdAt: number;
    teacherId: string;
    participants: Record<string, Participant>;
    unlockedChapters: Record<string, boolean>;
    studentCode?: StudentCode;
    studentOutput?: string[];
    studentTestResults?: TestResult[];
    activeChallenge?: {
        chapterId: string;
        challengeIndex: number;
    };
    playgroundMode?: boolean;
    playgroundCode?: string;
}

interface SessionContextType {
    // Session state
    sessionCode: string | null;
    isInSession: boolean;
    isTeacher: boolean;
    participantId: string;
    participants: Record<string, Participant>;

    // Session actions
    createSession: () => Promise<string>;
    joinSession: (code: string) => Promise<boolean>;
    leaveSession: () => Promise<void>;

    // Code sync (for student)
    syncCode: (code: string, chapterId: string, challengeIndex: number) => void;
    syncOutput: (output: string[]) => void;
    syncTestResults: (results: TestResult[] | null) => void;

    // Navigation sync (teacher -> student)
    activeChallenge: { chapterId: string; challengeIndex: number } | null;
    setActiveChallenge: (chapterId: string, challengeIndex: number) => void;

    // Code watching (for teacher)
    studentCode: StudentCode | null;
    studentOutput: string[];
    studentTestResults: TestResult[] | null;

    // Chapter unlocks (session-scoped)
    sessionUnlockedChapters: Record<string, boolean>;
    unlockChapter: (chapterId: string) => void;
    lockChapter: (chapterId: string) => void;

    // Playground mode
    playgroundMode: boolean;
    playgroundCode: string;
    setPlaygroundMode: (enabled: boolean) => void;
    syncPlaygroundCode: (code: string) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};

// Get or create participant ID from localStorage
const getOrCreateParticipantId = (): string => {
    const stored = localStorage.getItem('python_tutoring_participant_id');
    if (stored) return stored;
    const newId = generateParticipantId();
    localStorage.setItem('python_tutoring_participant_id', newId);
    return newId;
};

// Local session storage helpers
const getLocalSessions = (): Record<string, SessionData> => {
    try {
        const stored = localStorage.getItem(LOCAL_SESSIONS_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch {
        return {};
    }
};

const saveLocalSessions = (sessions: Record<string, SessionData>) => {
    try {
        localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(sessions));
    } catch (e) {
        console.error('[Session] Failed to save sessions:', e);
    }
};

const getLocalSession = (code: string): SessionData | null => {
    const sessions = getLocalSessions();
    return sessions[code] || null;
};

const saveLocalSession = (code: string, data: SessionData) => {
    const sessions = getLocalSessions();
    sessions[code] = data;
    saveLocalSessions(sessions);
};

const deleteLocalSession = (code: string) => {
    const sessions = getLocalSessions();
    delete sessions[code];
    saveLocalSessions(sessions);
};

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sessionCode, setSessionCode] = useState<string | null>(null);
    const [isTeacher, setIsTeacher] = useState(false);
    const [participantId] = useState(getOrCreateParticipantId);
    const [participants, setParticipants] = useState<Record<string, Participant>>({});
    const [studentCode, setStudentCode] = useState<StudentCode | null>(null);
    const [studentOutput, setStudentOutput] = useState<string[]>([]);
    const [studentTestResults, setStudentTestResults] = useState<TestResult[] | null>(null);
    const [activeChallenge, setActiveChallengeState] = useState<{ chapterId: string; challengeIndex: number } | null>(null);
    const [sessionUnlockedChapters, setSessionUnlockedChapters] = useState<Record<string, boolean>>({});
    const [playgroundMode, setPlaygroundModeState] = useState(false);
    const [playgroundCode, setPlaygroundCodeState] = useState('');

    const pollIntervalRef = useRef<number | null>(null);
    const isInSession = sessionCode !== null;

    // Poll local storage for session updates (when Firebase not available)
    useEffect(() => {
        if (!sessionCode) return;

        // If Firebase is available, use Firebase subscription
        if (db) {
            const sessionRef = ref(db, `sessions/${sessionCode}`);
            const unsubscribe = onValue(sessionRef, (snapshot) => {
                const data = snapshot.val() as SessionData | null;
                if (data) {
                    setParticipants(data.participants || {});
                    setSessionUnlockedChapters(data.unlockedChapters || {});
                    if (isTeacher && data.studentCode) {
                        setStudentCode(data.studentCode);
                    }
                    if (isTeacher && data.studentOutput) {
                        setStudentOutput(data.studentOutput);
                    }
                    if (isTeacher && data.studentTestResults !== undefined) {
                        setStudentTestResults(data.studentTestResults || null);
                    }
                    if (data.activeChallenge) {
                        setActiveChallengeState(data.activeChallenge);
                    }
                    if (data.playgroundMode !== undefined) {
                        setPlaygroundModeState(data.playgroundMode);
                    }
                    if (data.playgroundCode !== undefined) {
                        setPlaygroundCodeState(data.playgroundCode);
                    }
                } else {
                    // Session was deleted
                    setSessionCode(null);
                    setIsTeacher(false);
                    setParticipants({});
                    setSessionUnlockedChapters({});
                }
            });
            return () => unsubscribe();
        }

        // Local mode: poll localStorage for changes
        const pollSession = () => {
            const data = getLocalSession(sessionCode);
            if (data) {
                setParticipants(data.participants || {});
                setSessionUnlockedChapters(data.unlockedChapters || {});
                if (isTeacher && data.studentCode) {
                    setStudentCode(data.studentCode);
                }
                if (isTeacher && data.studentOutput) {
                    setStudentOutput(data.studentOutput);
                }
                if (isTeacher && data.studentTestResults !== undefined) {
                    setStudentTestResults(data.studentTestResults || null);
                }
                if (data.activeChallenge) {
                    setActiveChallengeState(data.activeChallenge);
                }
                if (data.playgroundMode !== undefined) {
                    setPlaygroundModeState(data.playgroundMode);
                }
                if (data.playgroundCode !== undefined) {
                    setPlaygroundCodeState(data.playgroundCode);
                }
            } else if (!isTeacher) {
                // Session was deleted by teacher
                console.log('[Session] Session ended by teacher');
                setSessionCode(null);
                setParticipants({});
                setSessionUnlockedChapters({});
                setActiveChallengeState(null);
            }
        };

        // Initial poll
        pollSession();

        // Poll every 500ms for updates
        pollIntervalRef.current = window.setInterval(pollSession, 500);

        return () => {
            if (pollIntervalRef.current) {
                clearInterval(pollIntervalRef.current);
            }
        };
    }, [sessionCode, isTeacher]);

    // Create a new session (teacher only)
    const createSession = useCallback(async (): Promise<string> => {
        const code = generateSessionCode();

        const sessionData: SessionData = {
            createdAt: Date.now(),
            teacherId: participantId,
            participants: {
                [participantId]: {
                    role: 'teacher',
                    joinedAt: Date.now()
                }
            },
            unlockedChapters: {
                'ch1-intro': true,
                'ch2-variables': true,
                'ch3-math': true
            }
        };

        // If Firebase is configured, persist to database
        if (db) {
            try {
                let finalCode = code;
                let attempts = 0;
                while (attempts < 10) {
                    const existing = await get(ref(db, `sessions/${finalCode}`));
                    if (!existing.exists()) break;
                    finalCode = generateSessionCode();
                    attempts++;
                }
                await set(ref(db, `sessions/${finalCode}`), sessionData);
                setSessionCode(finalCode);
                setIsTeacher(true);
                setSessionUnlockedChapters(sessionData.unlockedChapters);
                console.log('[Session] Created Firebase session:', finalCode);
                return finalCode;
            } catch (error) {
                console.error('[Session] Firebase error:', error);
            }
        }

        // Local-only mode
        saveLocalSession(code, sessionData);
        setSessionCode(code);
        setIsTeacher(true);
        setSessionUnlockedChapters(sessionData.unlockedChapters);
        setParticipants(sessionData.participants);
        console.log('[Session] Created local session:', code);
        return code;
    }, [participantId]);

    // Join an existing session (student)
    const joinSession = useCallback(async (code: string): Promise<boolean> => {
        const normalizedCode = code.toUpperCase().trim();

        // Try Firebase first
        if (db) {
            try {
                const sessionRef = ref(db, `sessions/${normalizedCode}`);
                const snapshot = await get(sessionRef);
                if (snapshot.exists()) {
                    await set(ref(db, `sessions/${normalizedCode}/participants/${participantId}`), {
                        role: 'student',
                        joinedAt: Date.now()
                    });
                    setSessionCode(normalizedCode);
                    setIsTeacher(false);
                    console.log('[Session] Joined Firebase session:', normalizedCode);
                    return true;
                }
            } catch (error) {
                console.error('[Session] Firebase error:', error);
            }
        }

        // Local mode: check localStorage
        const localSession = getLocalSession(normalizedCode);
        if (localSession) {
            // Add self as participant
            localSession.participants[participantId] = {
                role: 'student',
                joinedAt: Date.now()
            };
            saveLocalSession(normalizedCode, localSession);
            setSessionCode(normalizedCode);
            setIsTeacher(false);
            setSessionUnlockedChapters(localSession.unlockedChapters);
            setParticipants(localSession.participants);
            console.log('[Session] Joined local session:', normalizedCode);
            return true;
        }

        console.log('[Session] Session not found:', normalizedCode);
        return false;
    }, [participantId]);

    // Leave current session
    const leaveSession = useCallback(async (): Promise<void> => {
        if (!sessionCode) return;

        // Firebase mode
        if (db) {
            try {
                if (isTeacher) {
                    await remove(ref(db, `sessions/${sessionCode}`));
                } else {
                    await remove(ref(db, `sessions/${sessionCode}/participants/${participantId}`));
                }
            } catch (error) {
                console.error('[Session] Firebase error:', error);
            }
        }

        // Local mode
        if (isTeacher) {
            deleteLocalSession(sessionCode);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                delete session.participants[participantId];
                saveLocalSession(sessionCode, session);
            }
        }

        setSessionCode(null);
        setIsTeacher(false);
        setParticipants({});
        setStudentCode(null);
        setStudentOutput([]);
        setSessionUnlockedChapters({});
        console.log('[Session] Left session');
    }, [sessionCode, isTeacher, participantId]);

    // Sync student code
    const syncCode = useCallback((code: string, chapterId: string, challengeIndex: number) => {
        if (!sessionCode) return;

        const codeData: StudentCode = {
            content: code,
            chapterId,
            challengeIndex,
            lastUpdated: Date.now()
        };

        if (db) {
            set(ref(db, `sessions/${sessionCode}/studentCode`), codeData).catch(console.error);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                session.studentCode = codeData;
                saveLocalSession(sessionCode, session);
            }
        }
    }, [sessionCode]);

    // Sync student output
    const syncOutput = useCallback((output: string[]) => {
        if (!sessionCode || isTeacher) return;

        if (db) {
            set(ref(db, `sessions/${sessionCode}/studentOutput`), output).catch(console.error);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                session.studentOutput = output;
                saveLocalSession(sessionCode, session);
            }
        }
    }, [sessionCode, isTeacher]);

    // Sync student test results
    const syncTestResults = useCallback((results: TestResult[] | null) => {
        if (!sessionCode || isTeacher) return;

        if (db) {
            set(ref(db, `sessions/${sessionCode}/studentTestResults`), results).catch(console.error);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                session.studentTestResults = results || undefined;
                saveLocalSession(sessionCode, session);
            }
        }
    }, [sessionCode, isTeacher]);

    // Set active challenge (teacher only)
    const setActiveChallenge = useCallback((chapterId: string, challengeIndex: number) => {
        if (!sessionCode || !isTeacher) return;

        const data = { chapterId, challengeIndex };

        if (db) {
            set(ref(db, `sessions/${sessionCode}/activeChallenge`), data).catch(console.error);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                session.activeChallenge = data;
                saveLocalSession(sessionCode, session);
                setActiveChallengeState(data);
            }
        }
    }, [sessionCode, isTeacher]);

    // Unlock a chapter (teacher only)
    const unlockChapter = useCallback((chapterId: string) => {
        if (!sessionCode || !isTeacher) return;

        console.log('[Session] Unlocking chapter:', chapterId);

        if (db) {
            set(ref(db, `sessions/${sessionCode}/unlockedChapters/${chapterId}`), true).catch(console.error);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                session.unlockedChapters[chapterId] = true;
                saveLocalSession(sessionCode, session);
                setSessionUnlockedChapters({ ...session.unlockedChapters });
            }
        }
    }, [sessionCode, isTeacher]);

    // Lock a chapter (teacher only)
    const lockChapter = useCallback((chapterId: string) => {
        if (!sessionCode || !isTeacher) return;

        console.log('[Session] Locking chapter:', chapterId);

        if (db) {
            set(ref(db, `sessions/${sessionCode}/unlockedChapters/${chapterId}`), false).catch(console.error);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                session.unlockedChapters[chapterId] = false;
                saveLocalSession(sessionCode, session);
                setSessionUnlockedChapters({ ...session.unlockedChapters });
            }
        }
    }, [sessionCode, isTeacher]);

    // Set playground mode (teacher only)
    const setPlaygroundMode = useCallback((enabled: boolean) => {
        if (!sessionCode || !isTeacher) return;

        if (db) {
            set(ref(db, `sessions/${sessionCode}/playgroundMode`), enabled).catch(console.error);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                session.playgroundMode = enabled;
                saveLocalSession(sessionCode, session);
                setPlaygroundModeState(enabled);
            }
        }
    }, [sessionCode, isTeacher]);

    // Sync playground code
    const syncPlaygroundCode = useCallback((code: string) => {
        if (!sessionCode) return;

        if (db) {
            set(ref(db, `sessions/${sessionCode}/playgroundCode`), code).catch(console.error);
        } else {
            const session = getLocalSession(sessionCode);
            if (session) {
                session.playgroundCode = code;
                saveLocalSession(sessionCode, session);
                setPlaygroundCodeState(code);
            }
        }
    }, [sessionCode]);

    const contextValue: SessionContextType = {
        sessionCode,
        isInSession,
        isTeacher,
        participantId,
        participants,
        createSession,
        joinSession,
        leaveSession,
        syncCode,
        syncOutput,
        syncTestResults,
        activeChallenge,
        setActiveChallenge,
        studentCode,
        studentOutput,
        studentTestResults,
        sessionUnlockedChapters,
        unlockChapter,
        lockChapter,
        playgroundMode,
        playgroundCode,
        setPlaygroundMode,
        syncPlaygroundCode
    };

    return (
        <SessionContext.Provider value={contextValue}>
            {children}
        </SessionContext.Provider>
    );
};
