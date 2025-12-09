import React, { useEffect, useState, useCallback, useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { ConsolePanel } from './ConsolePanel';
import { usePython } from '../contexts/PythonContext';
import { useSession } from '../contexts/SessionContext';
import { useCollaborativeEditor } from '../hooks/useCollaborativeEditor';
import { Chapter } from '../types';
import { homeworkByChapter } from '../data/homework';
import type { editor } from 'monaco-editor';

interface IDELayoutProps {
    chapter: Chapter;
    currentChallengeIndex: number; // -1 = Example Code page, 0+ = challenges
    onNextChallenge: () => void;
    onPrevChallenge: () => void;
    onSelectChallenge: (index: number) => void;
    isLocked: boolean;
}

export const IDELayout: React.FC<IDELayoutProps> = ({
    chapter,
    currentChallengeIndex,
    onNextChallenge,
    onPrevChallenge,
    onSelectChallenge,
    isLocked
}) => {
    // Check if we're on the example page
    const isExamplePage = currentChallengeIndex === -1;
    const currentChallenge = isExamplePage ? null : chapter.challenges[currentChallengeIndex];
    const exampleContent = chapter.exampleContent;

    const { runCode, isRunning, clearOutput, output, testResults } = usePython();
    const {
        isInSession,
        isTeacher,
        sessionCode,
        participantId,
        syncOutput,
        syncTestResults,
        playgroundMode,
        playgroundCode,
        setPlaygroundMode,
        syncPlaygroundCode
    } = useSession();

    // Get initial code based on whether we're on example page or challenge
    const getInitialCode = useCallback(() => {
        if (isExamplePage && exampleContent) {
            return exampleContent.runnable;
        }
        return currentChallenge?.starterCode || '';
    }, [isExamplePage, exampleContent, currentChallenge]);

    const [editorCode, setEditorCode] = useState(getInitialCode());
    const [savedChallengeCode, setSavedChallengeCode] = useState('');
    const [showHint, setShowHint] = useState(false);
    const [showSolution, setShowSolution] = useState(false);

    // Monaco editor and instance refs
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const monacoRef = useRef<typeof import('monaco-editor') | null>(null);
    const [editorReady, setEditorReady] = useState(false);

    // Previous challenge ref to detect changes
    const prevChallengeIdRef = useRef<string | null>(null);

    const isLastChallenge = currentChallengeIndex === chapter.challenges.length - 1;
    const isFinalAssessment = isLastChallenge && chapter.challenges.length > 5;

    // Collaborative editing hook
    const { isConnected, collaborators, setText } = useCollaborativeEditor({
        sessionCode: isInSession ? sessionCode : null,
        isTeacher,
        participantId,
        editorInstance: editorReady ? editorRef.current : null,
        monacoInstance: editorReady ? monacoRef.current : null
    });

    // Get homework items
    const homeworkItems = React.useMemo(
        () => chapter.homework ?? homeworkByChapter[chapter.id] ?? [],
        [chapter],
    );

    // Handle editor mount
    const handleEditorMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        setEditorReady(true);

        // Set initial content
        const initialCode = getInitialCode();
        editor.setValue(initialCode);
    };

    // Update editor when challenge changes
    useEffect(() => {
        const currentId = isExamplePage ? '__example__' : currentChallenge?.id;

        if (currentId && prevChallengeIdRef.current !== currentId) {
            prevChallengeIdRef.current = currentId;
            const newCode = getInitialCode();
            setEditorCode(newCode);
            setShowHint(false);
            setShowSolution(false);
            clearOutput();

            // Update the shared document if in collaborative mode
            if (isInSession && editorRef.current) {
                if (isConnected) {
                    setText(newCode);
                } else {
                    editorRef.current.setValue(newCode);
                }
            } else if (editorRef.current) {
                editorRef.current.setValue(newCode);
            }
        }
    }, [currentChallengeIndex, isExamplePage, currentChallenge?.id, getInitialCode, clearOutput, isInSession, isConnected, setText]);

    // Sync output when it changes
    useEffect(() => {
        if (isInSession && !isTeacher && output.length > 0) {
            syncOutput(output);
        }
    }, [isInSession, isTeacher, output, syncOutput]);

    // Sync test results when they change
    useEffect(() => {
        if (isInSession && !isTeacher) {
            syncTestResults(testResults);
        }
    }, [isInSession, isTeacher, testResults, syncTestResults]);

    const handleRun = useCallback(() => {
        const code = editorRef.current?.getValue() || editorCode;
        if (!code.trim()) return;

        // On example page or playground mode, run without test cases
        if (isExamplePage || playgroundMode) {
            runCode(code);
        } else {
            runCode(code, currentChallenge?.testCases);
        }
    }, [editorCode, runCode, currentChallenge, playgroundMode, isExamplePage]);

    // Keyboard shortcut for running code
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                handleRun();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleRun]);

    const resetCode = () => {
        const resetToCode = getInitialCode();
        setEditorCode(resetToCode);
        clearOutput();

        if (isConnected) {
            setText(resetToCode);
        } else if (editorRef.current) {
            editorRef.current.setValue(resetToCode);
        }
    };

    // Track local editor changes
    const handleEditorChange = useCallback((value: string | undefined) => {
        setEditorCode(value || '');
        if (playgroundMode && isInSession) {
            syncPlaygroundCode(value || '');
        }
    }, [playgroundMode, isInSession, syncPlaygroundCode]);

    // Toggle playground mode
    const handleTogglePlayground = useCallback(() => {
        if (playgroundMode) {
            if (savedChallengeCode && editorRef.current) {
                editorRef.current.setValue(savedChallengeCode);
                setEditorCode(savedChallengeCode);
            }
            setPlaygroundMode(false);
        } else {
            const currentCode = editorRef.current?.getValue() || editorCode;
            setSavedChallengeCode(currentCode);
            const pgCode = playgroundCode || '# Playground - experiment freely!\n\n';
            if (editorRef.current) {
                editorRef.current.setValue(pgCode);
            }
            setEditorCode(pgCode);
            setPlaygroundMode(true);
        }
        clearOutput();
    }, [playgroundMode, savedChallengeCode, editorCode, playgroundCode, setPlaygroundMode, clearOutput]);

    const collaboratorCount = collaborators.size;

    // Render Example Content Panel
    const renderExampleContent = () => {
        if (!exampleContent) {
            return (
                <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-3">📚 Example Code</h3>
                    <p className="text-slate-400">No example content available for this chapter.</p>
                </div>
            );
        }

        return (
            <div className="p-5 space-y-6">
                {/* Introduction */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span>📚</span> Example Code
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        {exampleContent.intro}
                    </p>
                </div>

                {/* Code Blocks with Explanations */}
                <div className="space-y-4">
                    {exampleContent.codeBlocks.map((block, idx) => (
                        <div key={idx} className="bg-[#1e1e1e] rounded-lg border border-[#3c3c3c] overflow-hidden">
                            <pre className="p-3 text-sm font-mono text-emerald-300 bg-[#1a1a1a] border-b border-[#3c3c3c] overflow-x-auto">
                                {block.code}
                            </pre>
                            <p className="p-3 text-xs text-slate-400 leading-relaxed">
                                {block.explanation}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Tips */}
                {exampleContent.tips && exampleContent.tips.length > 0 && (
                    <div className="p-4 bg-[#1e1e1e] rounded-lg border border-[#3c3c3c]">
                        <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span>💡</span> Tips
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            {exampleContent.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-amber-400 mt-0.5">•</span>
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Call to Action */}
                <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-sm text-blue-200">
                        <strong>Try it!</strong> The code on the right is ready to run. Edit it and press <kbd className="px-1.5 py-0.5 bg-[#3c3c3c] rounded text-white text-xs">Run Code</kbd> to see the output.
                    </p>
                </div>
            </div>
        );
    };

    // Render Challenge Content Panel (existing logic)
    const renderChallengeContent = () => {
        return (
            <div className="p-5">
                {/* Final Assessment Badge */}
                {isFinalAssessment && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg">
                        <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                            <span>🏆</span>
                            <span>FINAL ASSESSMENT</span>
                        </div>
                        <p className="text-xs text-amber-200/70 mt-1">
                            Complete this challenge to master the chapter!
                        </p>
                    </div>
                )}

                {/* Challenge Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {currentChallenge?.title || `Challenge ${currentChallenge?.number}`}
                </h3>

                {/* Challenge Description */}
                <div className="prose prose-invert prose-sm max-w-none">
                    <p className="text-slate-300 leading-relaxed text-sm">
                        {currentChallenge?.description}
                    </p>
                </div>

                {/* Expandable Hint */}
                {currentChallenge?.hint && (
                    <div className="mt-5">
                        <button
                            onClick={() => setShowHint(!showHint)}
                            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                        >
                            <span className="text-lg">{showHint ? '💡' : '🤔'}</span>
                            <span>{showHint ? 'Hide Hint' : 'Need a hint?'}</span>
                        </button>
                        {showHint && (
                            <div className="mt-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg animate-fade-in">
                                <p className="text-amber-200/90 text-sm leading-relaxed">
                                    {currentChallenge.hint}
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {/* Show Solution Toggle */}
                {currentChallenge?.solutionCode && (
                    <div className="mt-4">
                        <button
                            onClick={() => setShowSolution(!showSolution)}
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                        >
                            <span className="text-lg">{showSolution ? '🔒' : '🔓'}</span>
                            <span>{showSolution ? 'Hide Solution' : 'Reveal Solution'}</span>
                        </button>
                        {showSolution && (
                            <div className="mt-3 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg animate-fade-in">
                                <pre className="text-purple-200/90 text-xs font-mono overflow-x-auto whitespace-pre-wrap">
                                    {currentChallenge.solutionCode}
                                </pre>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex h-full w-full bg-[#1e1e1e] overflow-hidden">
            {/* LEFT PANE: INSTRUCTIONS */}
            <div className="w-[380px] min-w-[320px] flex flex-col border-r border-[#3c3c3c] bg-[#252526] h-full">
                {/* Header */}
                <div className="p-5 border-b border-[#3c3c3c] bg-gradient-to-r from-[#1e1e1e] to-[#252526]">
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${isExamplePage
                            ? 'bg-gradient-to-br from-purple-500 to-pink-600'
                            : 'bg-gradient-to-br from-blue-500 to-indigo-600'
                            }`}>
                            <span className="text-white font-bold text-sm">
                                {isExamplePage ? '📚' : currentChallengeIndex + 1}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-base font-semibold text-white truncate">{chapter.title}</h2>
                            <p className="text-xs text-slate-400">{chapter.description}</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3">
                        <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                            <span>{isExamplePage ? 'Examples' : 'Progress'}</span>
                            <span className="text-blue-400">
                                {isExamplePage ? 'Learn First!' : `${currentChallengeIndex + 1} / ${chapter.challenges.length}`}
                            </span>
                        </div>
                        <div className="h-1.5 bg-[#3c3c3c] rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ease-out ${isExamplePage
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-full'
                                    : 'bg-gradient-to-r from-blue-500 to-emerald-500'
                                    }`}
                                style={isExamplePage ? {} : { width: `${((currentChallengeIndex + 1) / chapter.challenges.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto">
                    {isExamplePage ? renderExampleContent() : renderChallengeContent()}

                    {/* Quick Tips Section - only show on challenge pages */}
                    {!isExamplePage && (
                        <div className="px-5 pb-5">
                            <div className="p-4 bg-[#1e1e1e] rounded-lg border border-[#3c3c3c]">
                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Quick Tips</h4>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400 mt-0.5">⌨️</span>
                                        <span>Press <kbd className="px-1.5 py-0.5 bg-[#3c3c3c] rounded text-white">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-[#3c3c3c] rounded text-white">Enter</kbd> to run</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-0.5">💾</span>
                                        <span>Your code auto-saves in the editor</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-amber-400 mt-0.5">🧪</span>
                                        <span>Test with <code className="text-amber-200">print()</code> statements</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Homework Section */}
                    {homeworkItems.length > 0 && !isExamplePage && (
                        <div className="px-5 pb-5">
                            <div className="p-4 bg-[#1e1e1e] rounded-lg border border-[#3c3c3c]">
                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <span>🏠</span> Homework
                                </h4>
                                <div className="space-y-4">
                                    {homeworkItems.map((hw, idx) => (
                                        <div key={idx} className="bg-[#252526] border border-[#3c3c3c] rounded-md p-3">
                                            <div className="mb-2">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                                    Capstone Project
                                                </span>
                                            </div>
                                            <h5 className="text-sm font-bold text-slate-200 mb-1">{hw.title}</h5>
                                            <p className="text-xs text-slate-400 mb-3 leading-relaxed">{hw.brief}</p>
                                            {hw.bullets && (
                                                <ul className="space-y-1.5">
                                                    {hw.bullets.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                                                            <span className="text-indigo-400 mt-0.5">▸</span>
                                                            <span className="leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Footer */}
                <div className="p-4 border-t border-[#3c3c3c] bg-[#1e1e1e]">
                    <div className="flex items-center justify-between gap-3">
                        <button
                            onClick={onPrevChallenge}
                            disabled={isExamplePage}
                            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-[#3c3c3c] rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            ← Previous
                        </button>

                        {/* Challenge Dots with Example dot */}
                        <div className="flex items-center gap-1.5 overflow-x-auto max-w-[160px] py-1">
                            {/* Example Code dot */}
                            <button
                                onClick={() => onSelectChallenge(-1)}
                                className={`w-3 h-3 rounded-sm transition-all flex-shrink-0 ${isExamplePage
                                    ? 'bg-purple-500 scale-125'
                                    : 'bg-purple-500/40 hover:bg-purple-400'
                                    }`}
                                title="Example Code"
                            />

                            {/* Challenge dots */}
                            {chapter.challenges.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => onSelectChallenge(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all flex-shrink-0 ${i === currentChallengeIndex
                                        ? 'bg-blue-500 scale-125'
                                        : i < currentChallengeIndex
                                            ? 'bg-emerald-500/60 hover:bg-emerald-400'
                                            : 'bg-[#3c3c3c] hover:bg-slate-500'
                                        }`}
                                    title={`Challenge ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={onNextChallenge}
                            disabled={isLastChallenge && !isExamplePage}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${isLastChallenge && !isExamplePage
                                ? 'bg-emerald-600 text-white cursor-default'
                                : 'text-slate-400 hover:text-white hover:bg-[#3c3c3c]'
                                }`}
                        >
                            {isLastChallenge && !isExamplePage ? '✓ Complete' : 'Next →'}
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT PANE: EDITOR & CONSOLE */}
            <div className="flex-1 flex flex-col h-full bg-[#1e1e1e]">
                {/* Editor Toolbar */}
                <div className="h-12 bg-[#252526] border-b border-[#3c3c3c] flex items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] rounded-md border border-[#3c3c3c]">
                            <span className="text-yellow-500 text-sm">🐍</span>
                            <span className="text-xs text-slate-300 font-mono">
                                {isExamplePage ? 'examples.py' : 'main.py'}
                            </span>
                        </div>
                        <button
                            onClick={resetCode}
                            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                            title="Reset to starter code"
                        >
                            ↺ Reset
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Collaboration Status */}
                        {isInSession && (
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md border ${isConnected
                                ? 'bg-emerald-600/20 border-emerald-500/30'
                                : 'bg-yellow-600/20 border-yellow-500/30'
                                }`}>
                                <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-400 animate-pulse' : 'bg-yellow-400'}`} />
                                <span className={`text-xs font-medium ${isConnected ? 'text-emerald-400' : 'text-yellow-400'}`}>
                                    {isConnected
                                        ? `🤝 Live Collab ${collaboratorCount > 0 ? `(${collaboratorCount + 1})` : ''}`
                                        : '⏳ Connecting...'}
                                </span>
                            </div>
                        )}

                        {/* Playground Toggle - Teacher only in session */}
                        {isInSession && isTeacher && (
                            <button
                                onClick={handleTogglePlayground}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${playgroundMode
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50'
                                    : 'bg-[#3c3c3c] text-slate-400 hover:bg-[#4c4c4c] hover:text-white'
                                    }`}
                                title={playgroundMode ? 'Return to Challenge' : 'Enter Playground Mode'}
                            >
                                {playgroundMode ? '📝 Challenges' : '🧪 Playground'}
                            </button>
                        )}

                        <span className="text-xs text-slate-500">
                            {isRunning ? 'Executing...' : isExamplePage ? 'Examples' : isInSession ? 'Collaborative' : 'Ready'}
                        </span>
                        <button
                            onClick={handleRun}
                            disabled={isRunning}
                            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg ${isRunning
                                ? 'bg-slate-600 cursor-wait text-slate-300'
                                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white'
                                }`}
                        >
                            {isRunning ? (
                                <>
                                    <span className="animate-spin">⚙️</span>
                                    Running...
                                </>
                            ) : (
                                <>
                                    <span>▶</span>
                                    Run Code
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Editor Area */}
                <div className="flex-1 relative min-h-0">
                    <Editor
                        height="100%"
                        defaultLanguage="python"
                        defaultValue={getInitialCode()}
                        onChange={handleEditorChange}
                        onMount={handleEditorMount}
                        theme="vs-dark"
                        options={{
                            minimap: { enabled: false },
                            fontSize: 15,
                            fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                            lineNumbers: 'on',
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                            tabSize: 4,
                            padding: { top: 16, bottom: 16 },
                            cursorBlinking: 'smooth',
                            cursorSmoothCaretAnimation: 'on',
                            smoothScrolling: true,
                            renderLineHighlight: 'all',
                            bracketPairColorization: { enabled: true },
                            guides: {
                                bracketPairs: true,
                                indentation: true,
                            },
                            readOnly: false,
                        }}
                    />
                </div>

                {/* Console Area */}
                <div className="h-[35%] min-h-[180px] border-t border-[#3c3c3c]">
                    <ConsolePanel />
                </div>
            </div>

            {/* CSS for animations */}
            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
        </div>
    );
};
