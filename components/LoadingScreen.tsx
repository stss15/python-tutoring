import React, { useEffect, useState, useRef } from 'react';
import { usePython } from '../contexts/PythonContext';

interface LoadingScreenProps {
  studentName?: string;
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ studentName = 'Student', onFinish }) => {
  const [lines, setLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isReady, loadingMessage } = usePython();
  const [bootStep, setBootStep] = useState(0);

  // Initial Fake Boot Sequence (BIOS checks)
  useEffect(() => {
    const fakeBootLines = [
      { text: 'BIOS DATE 01/01/24 15:23:42 VER 1.0.2', delay: 100 },
      { text: 'CPU: QUANTUM-XYZ 64-BIT PROCESSOR', delay: 200 },
      { text: 'CHECKING MEMORY: 64512K OK', delay: 400 },
      { text: '', delay: 500 },
      { text: 'DETECTING PRIMARY MASTER ... QUANTUM DRIVE C:', delay: 800 },
      { text: 'DETECTING PRIMARY SLAVE  ... NONE', delay: 900 },
      { text: '', delay: 1000 },
      { text: 'LOADING SYSTEM COMPONENTS:', delay: 1200 },
    ];

    let timeouts: NodeJS.Timeout[] = [];

    fakeBootLines.forEach((item, idx) => {
      const timeout = setTimeout(() => {
        setLines(lines => [...lines, item.text]);
        if (idx === fakeBootLines.length - 1) {
          setBootStep(1); // Move to Python Loading phase
        }
      }, item.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Phase 2: Live Python Loading Status
  useEffect(() => {
    if (bootStep === 1) {
      setLines(lines => {
        // Avoid duplicate lines if message hasn't changed
        const lastLine = lines[lines.length - 1];
        if (lastLine !== `> ${loadingMessage}`) {
          return [...lines, `> ${loadingMessage}`];
        }
        return lines;
      });
    }
  }, [loadingMessage, bootStep]);

  // Phase 3: Completion
  useEffect(() => {
    if (isReady && bootStep >= 1) {
      const finishSequence = async () => {
        setLines(prev => [...prev, '', `WELCOME ${studentName.toUpperCase()}`, 'SYSTEM READY.']);
        await new Promise(r => setTimeout(r, 1500));
        onFinish();
      };
      finishSequence();
    }
  }, [isReady, bootStep, onFinish, studentName]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono p-10 flex flex-col items-start justify-start overflow-hidden z-[100]">
      <div className="w-full max-w-4xl mx-auto space-y-2" ref={scrollRef}>
        {lines.map((line, index) => (
          <div key={index} className="typewriter-line min-h-[1.5rem] break-words">
            {line && !line.startsWith('BIOS') && !line.startsWith('CPU') && !line.startsWith('CHECK') && !line.startsWith('DETECT') && !line.startsWith('LOAD') && !line.startsWith('WELC') && !line.startsWith('SYS') && !line.startsWith('>')
              ? <><span className="mr-2">{'>'}</span>{line}</>
              : line}
          </div>
        ))}
        <div className="animate-pulse">_</div>
      </div>

      <div className="absolute bottom-10 right-10 text-xs text-green-700">
        STEVEN STEWART TUTORING // SYSTEM BOOT // PYTHON 3.11.0
      </div>

      <style>{`
        .typewriter-line {
          animation: fadeIn 0.1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
