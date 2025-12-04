import React, { useMemo, useState } from 'react';
import { Chapter } from '../types';
import { homeworkByChapter } from '../data/homework';

interface ChapterViewProps {
  chapter: Chapter;
  isLocked: boolean;
  onUnlock: (passwordAttempt: string) => boolean;
  onLock: (passwordAttempt: string) => boolean;
  verifyPassword: (passwordAttempt: string) => boolean;
}

// Simple Python syntax highlighter
const highlightPython = (code: string): React.ReactNode => {
  const keywords = ['def', 'return', 'if', 'elif', 'else', 'for', 'while', 'in', 'not', 'and', 'or', 'True', 'False', 'None', 'import', 'from', 'as', 'class', 'try', 'except', 'finally', 'with', 'pass', 'break', 'continue', 'lambda', 'yield', 'global', 'nonlocal', 'assert', 'raise', 'is'];
  const builtins = ['print', 'len', 'range', 'str', 'int', 'float', 'bool', 'list', 'dict', 'set', 'tuple', 'abs', 'round', 'sum', 'min', 'max', 'sorted', 'enumerate', 'zip', 'map', 'filter', 'any', 'all', 'open', 'type', 'isinstance', 'input'];
  
  const lines = code.split('\n');
  
  return lines.map((line, lineIndex) => {
    const parts: React.ReactNode[] = [];
    let remaining = line;
    let partIndex = 0;
    
    // Handle comments
    const commentIdx = remaining.indexOf('#');
    let comment = '';
    if (commentIdx !== -1) {
      comment = remaining.slice(commentIdx);
      remaining = remaining.slice(0, commentIdx);
    }
    
    // Process the line character by character for better highlighting
    let i = 0;
    while (i < remaining.length) {
      // Check for strings
      if (remaining[i] === '"' || remaining[i] === "'") {
        const quote = remaining[i];
        const isTriple = remaining.slice(i, i + 3) === quote.repeat(3);
        const endQuote = isTriple ? quote.repeat(3) : quote;
        const startIdx = i;
        i += isTriple ? 3 : 1;
        
        while (i < remaining.length && remaining.slice(i, i + endQuote.length) !== endQuote) {
          if (remaining[i] === '\\') i++;
          i++;
        }
        i += endQuote.length;
        
        parts.push(
          <span key={partIndex++} className="text-emerald-400">
            {remaining.slice(startIdx, i)}
          </span>
        );
        continue;
      }
      
      // Check for f-strings
      if ((remaining[i] === 'f' || remaining[i] === 'F') && (remaining[i + 1] === '"' || remaining[i + 1] === "'")) {
        const quote = remaining[i + 1];
        const startIdx = i;
        i += 2;
        
        while (i < remaining.length && remaining[i] !== quote) {
          if (remaining[i] === '\\') i++;
          i++;
        }
        i++;
        
        parts.push(
          <span key={partIndex++} className="text-emerald-400">
            {remaining.slice(startIdx, i)}
          </span>
        );
        continue;
      }
      
      // Check for numbers
      if (/\d/.test(remaining[i])) {
        const startIdx = i;
        while (i < remaining.length && /[\d.]/.test(remaining[i])) i++;
        parts.push(
          <span key={partIndex++} className="text-amber-400">
            {remaining.slice(startIdx, i)}
          </span>
        );
        continue;
      }
      
      // Check for words (keywords, builtins, function names)
      if (/[a-zA-Z_]/.test(remaining[i])) {
        const startIdx = i;
        while (i < remaining.length && /[a-zA-Z0-9_]/.test(remaining[i])) i++;
        const word = remaining.slice(startIdx, i);
        
        // Check if it's a function definition
        const beforeWord = remaining.slice(0, startIdx).trim();
        const afterWord = remaining.slice(i);
        
        if (keywords.includes(word)) {
          parts.push(
            <span key={partIndex++} className="text-pink-400 font-medium">
              {word}
            </span>
          );
        } else if (builtins.includes(word)) {
          parts.push(
            <span key={partIndex++} className="text-cyan-400">
              {word}
            </span>
          );
        } else if (beforeWord.endsWith('def')) {
          parts.push(
            <span key={partIndex++} className="text-blue-400 font-medium">
              {word}
            </span>
          );
        } else if (afterWord.trimStart().startsWith('(')) {
          parts.push(
            <span key={partIndex++} className="text-blue-300">
              {word}
            </span>
          );
        } else {
          parts.push(
            <span key={partIndex++} className="text-slate-200">
              {word}
            </span>
          );
        }
        continue;
      }
      
      // Operators and punctuation
      if ('+-*/%=<>!&|^~:,()[]{}@'.includes(remaining[i])) {
        parts.push(
          <span key={partIndex++} className="text-slate-400">
            {remaining[i]}
          </span>
        );
        i++;
        continue;
      }
      
      // Everything else (spaces, etc.)
      parts.push(<span key={partIndex++}>{remaining[i]}</span>);
      i++;
    }
    
    // Add comment if present
    if (comment) {
      parts.push(
        <span key={partIndex++} className="text-slate-500 italic">
          {comment}
        </span>
      );
    }
    
    return (
      <div key={lineIndex} className="leading-relaxed">
        {parts.length > 0 ? parts : '\u00A0'}
      </div>
    );
  });
};

// Code block component with syntax highlighting
const CodeBlock: React.FC<{ code: string; className?: string }> = ({ code, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="px-3 py-1.5 text-xs font-medium bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-md transition-colors"
        >
          Copy
        </button>
      </div>
      <pre className="bg-[#1a1a24] text-slate-50 p-5 rounded-xl overflow-x-auto text-sm border border-slate-700/50 shadow-lg">
        <code className="font-mono">{highlightPython(code)}</code>
      </pre>
    </div>
  );
};

export const ChapterView: React.FC<ChapterViewProps> = ({ chapter, isLocked, onUnlock, onLock, verifyPassword }) => {
  const [activeTab, setActiveTab] = useState<'learn' | 'challenges'>('learn');
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [unlockInput, setUnlockInput] = useState('');
  const [unlockError, setUnlockError] = useState('');
  const [solutionPassword, setSolutionPassword] = useState('');
  const [solutionUnlocked, setSolutionUnlocked] = useState(false);
  const [solutionError, setSolutionError] = useState('');
  const [lockInput, setLockInput] = useState('');
  const [showLockDialog, setShowLockDialog] = useState(false);

  const currentChallenge = chapter.challenges?.[currentChallengeIndex];
  const homeworkItems = useMemo(
    () => chapter.homework ?? homeworkByChapter[chapter.id] ?? [],
    [chapter],
  );

  // Reset state when chapter changes
  React.useEffect(() => {
    setActiveTab('learn');
    setCurrentChallengeIndex(0);
    setShowSolution(false);
    setUnlockInput('');
    setUnlockError('');
    setSolutionPassword('');
    setSolutionUnlocked(false);
    setSolutionError('');
    setLockInput('');
    setShowLockDialog(false);
  }, [chapter.id]);

  // Reset solution state when challenge changes
  React.useEffect(() => {
    setShowSolution(false);
    setSolutionPassword('');
    setSolutionUnlocked(false);
    setSolutionError('');
  }, [currentChallengeIndex]);

  const handleUnlock = () => {
    const ok = onUnlock(unlockInput);
    if (ok) {
      setUnlockInput('');
      setUnlockError('');
    } else {
      setUnlockError('Incorrect password. Ask your teacher to unlock when ready.');
    }
  };

  const handleLock = () => {
    const ok = onLock(lockInput);
    if (ok) {
      setLockInput('');
      setShowLockDialog(false);
    }
  };

  const handleSolutionUnlock = () => {
    if (verifyPassword(solutionPassword)) {
      setSolutionUnlocked(true);
      setShowSolution(true);
      setSolutionError('');
    } else {
      setSolutionError('Incorrect password');
    }
  };

  const solutionText =
    (currentChallenge?.solutionCode && currentChallenge.solutionCode.trim().length > 0)
      ? currentChallenge.solutionCode
      : '# Solution will be revealed by your teacher. Keep trying!';

  return (
    <div className="flex flex-col h-full bg-[#0d0d14]">
      {/* Header */}
      <div className="border-b border-slate-800 px-8 py-6 bg-gradient-to-r from-[#0d0d14] to-[#12121a]">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-100 tracking-tight">{chapter.title}</h2>
            <p className="text-slate-400 mt-1 text-sm">{chapter.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                isLocked 
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              }`}
            >
              {isLocked ? '🔒 Locked' : '🔓 Unlocked'}
            </span>
            {isLocked ? (
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  value={unlockInput}
                  onChange={(e) => setUnlockInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  placeholder="Teacher password"
                  className="px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleUnlock}
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-colors"
                >
                  Unlock
                </button>
              </div>
            ) : (
              <>
                {showLockDialog ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="password"
                      value={lockInput}
                      onChange={(e) => setLockInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleLock()}
                      placeholder="Teacher password"
                      className="px-3 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleLock}
                      className="px-4 py-2 text-sm font-medium bg-rose-600 text-white rounded-lg shadow hover:bg-rose-500 transition-colors"
                    >
                      Lock
                    </button>
                    <button
                      onClick={() => setShowLockDialog(false)}
                      className="px-3 py-2 text-sm text-slate-400 hover:text-slate-200"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowLockDialog(true)}
                    className="px-4 py-2 text-sm font-medium bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors"
                  >
                    Lock Chapter
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        {unlockError && (
          <p className="text-sm text-rose-400 mt-2">{unlockError}</p>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 px-8 bg-[#0d0d14]">
        <button
          onClick={() => setActiveTab('learn')}
          className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'learn'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-300'
          }`}
          disabled={isLocked}
        >
          📚 Learn
        </button>
        <button
          onClick={() => setActiveTab('challenges')}
          className={`py-4 px-6 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'challenges'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-300'
          }`}
          disabled={isLocked}
        >
          🎯 Challenges ({chapter.challenges.length})
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-[#0d0d14] to-[#0a0a0f]">
        {isLocked ? (
          <div className="h-full flex items-center justify-center">
            <div className="max-w-md w-full bg-[#15151f] border border-slate-800 rounded-2xl shadow-2xl p-8 text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <p className="text-xl font-semibold text-slate-100 mb-2">Chapter Locked</p>
              <p className="text-slate-400 mb-6">Ask your teacher to unlock this chapter when you're ready to proceed.</p>
              <div className="flex flex-col gap-3">
                <input
                  type="password"
                  value={unlockInput}
                  onChange={(e) => setUnlockInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  placeholder="Teacher password"
                  className="w-full px-4 py-3 text-sm rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleUnlock}
                  className="w-full px-4 py-3 text-sm font-medium bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-colors"
                >
                  Unlock Chapter
                </button>
              </div>
              {unlockError && <p className="text-sm text-rose-400 mt-3">{unlockError}</p>}
            </div>
          </div>
        ) : activeTab === 'learn' ? (
          <div className="max-w-3xl mx-auto">
            {chapter.requiresLocalEnv && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⚠️</span>
                  <p className="text-sm text-amber-300">
                    This chapter requires a local Python environment (like VS Code or IDLE) to run code.
                  </p>
                </div>
              </div>
            )}
            
            <div className="bg-[#15151f] rounded-2xl border border-slate-800 p-8 mb-8 shadow-xl">
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                <span className="text-xl">💡</span> Key Concepts
              </h3>
              <div 
                dangerouslySetInnerHTML={{ __html: chapter.explanation }} 
                className="text-slate-300 leading-relaxed prose prose-invert prose-sm max-w-none
                  [&_h4]:text-slate-200 [&_h4]:font-semibold [&_h4]:mt-6 [&_h4]:mb-3
                  [&_p]:mb-3 [&_p]:text-slate-400
                  [&_code]:bg-slate-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-pink-400 [&_code]:text-sm"
              />
            </div>
            
            <div className="bg-[#15151f] rounded-2xl border border-slate-800 p-8 shadow-xl">
              <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                <span className="text-xl">📝</span> Example Code
              </h3>
              <CodeBlock code={chapter.exampleCode} />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto h-full flex flex-col">
            {/* Challenge Navigator */}
            {currentChallenge ? (
              <>
                <div className="flex items-center justify-between mb-6 bg-[#15151f] p-4 rounded-xl border border-slate-800 shadow-lg sticky top-0 z-10">
                  <button
                    disabled={currentChallengeIndex === 0}
                    onClick={() => setCurrentChallengeIndex(prev => prev - 1)}
                    className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous
                  </button>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-slate-300">
                      Challenge {currentChallengeIndex + 1} of {chapter.challenges.length}
                    </span>
                    <div className="flex gap-1">
                      {chapter.challenges.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentChallengeIndex(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            idx === currentChallengeIndex 
                              ? 'bg-blue-500' 
                              : 'bg-slate-700 hover:bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    disabled={currentChallengeIndex === chapter.challenges.length - 1}
                    onClick={() => setCurrentChallengeIndex(prev => prev + 1)}
                    className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Next →
                  </button>
                </div>

                {/* Challenge Description */}
                <div className="bg-[#15151f] p-8 rounded-2xl border border-slate-800 shadow-xl mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                      Challenge #{currentChallenge.number}
                    </span>
                  </div>
                  <p className="text-lg text-slate-200 leading-relaxed">{currentChallenge.description}</p>
                  {currentChallenge.hint && (
                    <div className="mt-4 p-4 bg-amber-500/10 text-amber-300 rounded-lg text-sm border border-amber-500/20">
                      <strong>💡 Hint:</strong> {currentChallenge.hint}
                    </div>
                  )}
                </div>

                {/* Starter Code */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-emerald-400">📋</span>
                    <label className="text-sm font-semibold text-slate-300">Starter Code</label>
                    <span className="text-xs text-slate-500">(Copy this to your editor)</span>
                  </div>
                  <CodeBlock code={currentChallenge.starterCode} />
                </div>

                {/* Solution Area - Password Protected */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">🔐</span>
                      <label className="text-sm font-semibold text-slate-300">Solution</label>
                    </div>
                  </div>
                  
                  {solutionUnlocked && showSolution ? (
                    <div className="relative">
                      <button
                        onClick={() => {
                          setShowSolution(false);
                          setSolutionUnlocked(false);
                          setSolutionPassword('');
                        }}
                        className="absolute top-3 right-12 z-10 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        Hide
                      </button>
                      <CodeBlock code={solutionText} className="border-2 border-emerald-500/30" />
                    </div>
                  ) : (
                    <div className="bg-[#15151f] rounded-xl border border-slate-800 p-6">
                      <div className="text-center">
                        <p className="text-slate-400 mb-4">
                          Solutions are password protected. Ask your teacher if you're stuck!
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                          <input
                            type="password"
                            value={solutionPassword}
                            onChange={(e) => setSolutionPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSolutionUnlock()}
                            placeholder="Teacher password"
                            className="w-full sm:flex-1 px-4 py-2.5 text-sm rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button
                            onClick={handleSolutionUnlock}
                            className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-colors"
                          >
                            Reveal Solution
                          </button>
                        </div>
                        {solutionError && (
                          <p className="text-sm text-rose-400 mt-3">{solutionError}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center p-8 text-slate-500">
                <p>No challenges available for this chapter.</p>
              </div>
            )}

            {/* Homework */}
            {homeworkItems.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-800">
                <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center gap-2">
                  <span className="text-xl">🏠</span> Homework Project
                </h3>
                <div className="flex flex-col gap-4">
                  {homeworkItems.map((hw, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-[#1a1a2e] to-[#15151f] border border-indigo-500/20 rounded-2xl shadow-xl p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-500/30">
                          CAPSTONE PROJECT
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-100 mb-2">{hw.title}</h4>
                      <p className="text-slate-300 mb-4">{hw.brief}</p>
                      {hw.bullets && (
                        <ul className="space-y-2">
                          {hw.bullets.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                              <span className="text-indigo-400 mt-0.5">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
