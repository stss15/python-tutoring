import React, { useEffect, useState, useCallback, useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { ConsolePanel } from './ConsolePanel';
import { usePython } from '../contexts/PythonContext';
import { useSession } from '../contexts/SessionContext';
import { useCollaborativeEditor } from '../hooks/useCollaborativeEditor';
import { Chapter } from '../types';
import type { editor } from 'monaco-editor';

interface IDELayoutProps {
    chapter: Chapter;
    currentChallengeIndex: number;
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
    const currentChallenge = chapter.challenges[currentChallengeIndex];
    const { runCode, isRunning, clearOutput, output } = usePython();
    const { isInSession, isTeacher, sessionCode, participantId, syncOutput } = useSession();

    const [editorCode, setEditorCode] = useState(currentChallenge?.starterCode || '');
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

    // Handle editor mount
    const handleEditorMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        setEditorReady(true);

        // Set initial content
        if (currentChallenge?.starterCode) {
            editor.setValue(currentChallenge.starterCode);
        }
    };

    // Update editor when challenge changes
    useEffect(() => {
        if (currentChallenge && prevChallengeIdRef.current !== currentChallenge.id) {
            prevChallengeIdRef.current = currentChallenge.id;
            const starterCode = currentChallenge.starterCode || '';
            setEditorCode(starterCode);
            setShowHint(false);
            setShowSolution(false);
            clearOutput();

            // Update the shared document if in collaborative mode
            if (isInSession && editorRef.current) {
                // For collaborative mode, set the text in Yjs document
                if (isConnected) {
                    setText(starterCode);
                } else {
                    // Fallback for non-collaborative
                    editorRef.current.setValue(starterCode);
                }
            } else if (editorRef.current) {
                editorRef.current.setValue(starterCode);
            }
        }
    }, [currentChallenge?.id, currentChallenge?.starterCode, clearOutput, isInSession, isConnected, setText]);

    // Sync output when it changes
    useEffect(() => {
        if (isInSession && !isTeacher && output.length > 0) {
            syncOutput(output);
        }
    }, [isInSession, isTeacher, output, syncOutput]);

    const handleRun = useCallback(() => {
        // Get code from editor directly for most accurate state
        const code = editorRef.current?.getValue() || editorCode;
        if (!code.trim()) return;
        runCode(code, currentChallenge.testCases);
    }, [editorCode, runCode, currentChallenge]);

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
        if (currentChallenge) {
            const starterCode = currentChallenge.starterCode || '';
            setEditorCode(starterCode);
            clearOutput();

            if (isConnected) {
                setText(starterCode);
            } else if (editorRef.current) {
                editorRef.current.setValue(starterCode);
            }
        }
    };

    // Track local editor changes (for non-collaborative mode sync)
    const handleEditorChange = useCallback((value: string | undefined) => {
        setEditorCode(value || '');
    }, []);

    // Collaborator count for display
    const collaboratorCount = collaborators.size;

    return (
        <div className="flex h-full w-full bg-[#1e1e1e] overflow-hidden">
            {/* LEFT PANE: INSTRUCTIONS */}
            <div className="w-[380px] min-w-[320px] flex flex-col border-r border-[#3c3c3c] bg-[#252526] h-full">
                {/* Header */}
                <div className="p-5 border-b border-[#3c3c3c] bg-gradient-to-r from-[#1e1e1e] to-[#252526]">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-sm">{currentChallengeIndex + 1}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-base font-semibold text-white truncate">{chapter.title}</h2>
                            <p className="text-xs text-slate-400">{chapter.description}</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3">
                        <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                            <span>Progress</span>
                            <span className="text-blue-400">{currentChallengeIndex + 1} / {chapter.challenges.length}</span>
                        </div>
                        <div className="h-1.5 bg-[#3c3c3c] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${((currentChallengeIndex + 1) / chapter.challenges.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Challenge Content */}
                <div className="flex-1 overflow-y-auto">
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

                    {/* Quick Tips Section */}
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
                </div>

                {/* Navigation Footer */}
                <div className="p-4 border-t border-[#3c3c3c] bg-[#1e1e1e]">
                    <div className="flex items-center justify-between gap-3">
                        <button
                            onClick={onPrevChallenge}
                            disabled={currentChallengeIndex === 0}
                            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-[#3c3c3c] rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            ← Previous
                        </button>

                        {/* Challenge Dots */}
                        <div className="flex items-center gap-1.5 overflow-x-auto max-w-[140px] py-1">
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
                            disabled={isLastChallenge}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${isLastChallenge
                                ? 'bg-emerald-600 text-white cursor-default'
                                : 'text-slate-400 hover:text-white hover:bg-[#3c3c3c]'
                                }`}
                        >
                            {isLastChallenge ? '✓ Complete' : 'Next →'}
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
                            <span className="text-xs text-slate-300 font-mono">main.py</span>
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

                        <span className="text-xs text-slate-500">
                            {isRunning ? 'Executing...' : isInSession ? 'Collaborative' : 'Ready'}
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
                        defaultValue={currentChallenge?.starterCode || ''}
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
