import React, { useEffect, useRef, useState } from 'react';
import { usePython } from '../contexts/PythonContext';

export const ConsolePanel: React.FC = () => {
    const { output, isRunning, clearOutput, testResults } = usePython();
    const bottomRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<'terminal' | 'tests'>('terminal');

    // Auto-switch to tests tab if results come in
    useEffect(() => {
        if (testResults) {
            setActiveTab('tests');
        }
    }, [testResults]);

    // Auto-scroll to bottom of terminal
    useEffect(() => {
        if (activeTab === 'terminal') {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [output, activeTab]);

    const getLineStyle = (line: string) => {
        if (line.startsWith('Error:') || line.includes('Traceback')) return 'text-red-400';
        if (line.startsWith('>>>')) return 'text-blue-400';
        return 'text-slate-200';
    };

    const passedCount = testResults?.filter(r => r.passed).length || 0;
    const totalTests = testResults?.length || 0;
    const allPassed = totalTests > 0 && passedCount === totalTests;

    return (
        <div className="flex flex-col h-full bg-[#0d0d0d] font-mono text-sm">
            {/* Tab Header */}
            <div className="flex items-center bg-[#1a1a1a] border-b border-[#2a2a2a]">
                <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${activeTab === 'terminal'
                            ? 'text-white border-b-2 border-blue-500 bg-[#252526]'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                >
                    Terminal
                </button>
                <button
                    onClick={() => setActiveTab('tests')}
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 ${activeTab === 'tests'
                            ? 'text-white border-b-2 border-emerald-500 bg-[#252526]'
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                >
                    Test Cases
                    {testResults && (
                        <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${allPassed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                            {passedCount}/{totalTests}
                        </span>
                    )}
                </button>

                <div className="flex-1" />

                <div className="flex items-center gap-2 px-2">
                    {isRunning && <span className="text-xs text-blue-400 animate-pulse">Running...</span>}
                    <button onClick={clearOutput} className="text-xs text-slate-500 hover:text-white px-2 py-1">Clear</button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                {activeTab === 'terminal' ? (
                    <div className="space-y-0.5">
                        {output.length === 0 && !isRunning && <div className="text-slate-600 italic text-xs">Output will appear here...</div>}
                        {output.map((line, idx) => (
                            <div key={idx} className={`${getLineStyle(line)} whitespace-pre-wrap break-all`}>{line}</div>
                        ))}
                        <div ref={bottomRef} />
                    </div>
                ) : (
                    <div className="space-y-3">
                        {!testResults ? (
                            <div className="text-slate-600 italic text-xs">Run code to see test results...</div>
                        ) : (
                            <>
                                {/* Summary Banner */}
                                <div className={`p-3 rounded-lg border ${allPassed
                                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                                    }`}>
                                    <div className="font-bold text-sm mb-1">{allPassed ? '🎉 All Tests Passed!' : '❌ Some Tests Failed'}</div>
                                    <div className="text-xs opacity-80">You passed {passedCount} out of {totalTests} tests.</div>
                                </div>

                                {/* Test List */}
                                {testResults.map((result, idx) => (
                                    <div key={idx} className={`p-3 rounded bg-[#1e1e1e] border ${result.passed ? 'border-emerald-500/20' : 'border-red-500/20'}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-mono text-xs text-slate-400">Test Case {idx + 1}</span>
                                            <span className={result.passed ? 'text-emerald-500' : 'text-red-500'}>
                                                {result.passed ? 'PASSED' : 'FAILED'}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs font-mono">
                                            <div className="text-slate-500 text-right">Input:</div>
                                            <div className="text-slate-300">{result.input}</div>

                                            <div className="text-slate-500 text-right">Expected:</div>
                                            <div className="text-emerald-400/80">{result.expected}</div>

                                            <div className="text-slate-500 text-right">Actual:</div>
                                            <div className={`${result.passed ? 'text-emerald-400/80' : 'text-red-400'}`}>
                                                {result.actual}
                                            </div>

                                            {result.error && (
                                                <>
                                                    <div className="text-red-500 text-right">Error:</div>
                                                    <div className="text-red-400">{result.error}</div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
