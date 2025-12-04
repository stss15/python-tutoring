import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  studentName?: string;
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ studentName = 'Student', onFinish }) => {
  const title = 'Python Mastery';
  const subtitle = 'Learn to Code';
  const [typed, setTyped] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let idx = 0;
    let cancelled = false;
    
    const interval = setInterval(() => {
      if (cancelled) return;
      idx += 1;
      setTyped(title.slice(0, idx));
      setProgress((idx / title.length) * 100);
      
      if (idx >= title.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (!cancelled) setShowSubtitle(true);
        }, 300);
        setTimeout(() => {
          if (!cancelled) onFinish();
        }, 1500);
      }
    }, 100);
    
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[#0a0a0f] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Python logo */}
      <div className="relative z-10 mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-bounce" style={{ animationDuration: '2s' }}>
          <span className="text-5xl">🐍</span>
        </div>
      </div>
      
      {/* Title with typing effect */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
          {typed}
          <span className="inline-block w-0.5 h-10 bg-blue-400 ml-1 animate-pulse" />
        </h1>
        <p className={`text-lg text-slate-400 transition-all duration-500 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {subtitle}
        </p>
      </div>
      
      {/* Progress bar */}
      <div className="relative z-10 w-64 mb-8">
        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Loading message */}
      <div className="relative z-10 flex items-center gap-3 text-slate-500">
        <div className="h-5 w-5 border-2 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
        <span className="text-sm">Preparing your lessons...</span>
      </div>
      
      {/* Skip button */}
      <button
        onClick={onFinish}
        className="relative z-10 mt-8 text-xs uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors"
      >
        Skip →
      </button>
      
      {/* Credit */}
      <div className="absolute bottom-6 text-xs text-slate-700">
        Mr Stewart Python Tutoring
      </div>
    </div>
  );
};
