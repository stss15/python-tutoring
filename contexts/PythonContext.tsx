import React, { createContext, useContext, useEffect, useState, useRef, useCallback, useMemo } from 'react';

// Define Pyodide types roughly
interface PyodideInterface {
    runPythonAsync: (code: string) => Promise<any>;
    runPython: (code: string) => any;
    setStdout: (options: { batched: (msg: string) => void }) => void;
    setStderr: (options: { batched: (msg: string) => void }) => void;
    loadPackage: (packages: string[]) => Promise<void>;
}

declare global {
    interface Window {
        loadPyodide: (config: { indexURL: string }) => Promise<PyodideInterface>;
    }
}

interface TestCase {
    input: string;
    expected: string;
}

interface TestResult {
    input: string;
    expected: string;
    actual: string;
    passed: boolean;
    error?: string;
}

interface PythonContextType {
    isLoading: boolean;
    isReady: boolean;
    loadingMessage: string;
    runCode: (code: string, testCases?: TestCase[]) => Promise<void>;
    output: string[];
    clearOutput: () => void;
    isRunning: boolean;
    testResults: TestResult[] | null;
}

const PythonContext = createContext<PythonContextType | undefined>(undefined);

export const usePython = () => {
    const context = useContext(PythonContext);
    if (!context) {
        throw new Error('usePython must be used within a PythonProvider');
    }
    return context;
};

export const PythonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('Initializing Python environment...');
    const [output, setOutput] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [testResults, setTestResults] = useState<TestResult[] | null>(null);

    // Ref to hold setOutput function for use in Pyodide callbacks
    const setOutputRef = useRef(setOutput);
    setOutputRef.current = setOutput;

    useEffect(() => {
        const loadEngine = async () => {
            try {
                setLoadingMessage('Downloading Pyodide (Python 3.11)...');

                // Load the script dynamically
                if (!window.loadPyodide) {
                    const script = document.createElement('script');
                    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
                    script.async = true;
                    document.body.appendChild(script);
                    await new Promise((resolve) => {
                        script.onload = resolve;
                    });
                }

                setLoadingMessage('Instantiating WebAssembly...');
                const py = await window.loadPyodide({
                    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/'
                });

                // Setup standard output capture
                py.setStdout({
                    batched: (msg) => {
                        if (msg.startsWith('__TEST_RESULTS__:')) {
                            try {
                                const updatedJson = msg.replace('__TEST_RESULTS__:', '');
                                const results = JSON.parse(updatedJson);
                                setTestResults(results);
                            } catch (e) {
                                console.error("Failed to parse test results", e);
                            }
                        } else {
                            // Use ref to always have fresh setOutput
                            const lines = msg.split('\n').filter(line => line.length > 0);
                            if (lines.length > 0) {
                                setOutputRef.current(prev => [...prev, ...lines]);
                            }
                        }
                    }
                });

                py.setStderr({
                    batched: (msg) => {
                        setOutputRef.current(prev => [...prev, `Error: ${msg}`]);
                    }
                });

                setLoadingMessage('Loading standard libraries...');

                setPyodide(py);
                setIsReady(true);
                setLoadingMessage('System Ready.');
            } catch (error) {
                console.error('Failed to load Pyodide:', error);
                setLoadingMessage('Failed to load Python engine. Please refresh.');
            } finally {
                setIsLoading(false);
            }
        };

        loadEngine();
    }, []);

    const runCode = useCallback(async (code: string, testCases?: TestCase[]) => {
        if (!pyodide) return;
        setIsRunning(true);
        setTestResults(null); // Clear previous test results
        setOutput([]); // Clear previous terminal output

        try {
            // Small delay to ensure UI updates show "Running..."
            await new Promise(r => setTimeout(r, 10));

            // STEP 1: Run user code first (this shows output in terminal)
            await pyodide.runPythonAsync(code);

            // STEP 2: Run test cases separately (completely silently)
            if (testCases && testCases.length > 0) {
                const testRunnerScript = `
import json
import sys
import io

def __run_tests():
    test_cases = ${JSON.stringify(testCases)}
    results = []
    
    # Completely suppress stdout for all test evaluation
    original_stdout = sys.stdout
    sys.stdout = io.StringIO()
    
    try:
        for case in test_cases:
            try:
                expected = eval(case['expected'])
                actual = eval(case['input'])
                
                passed = actual == expected
                results.append({
                    "input": case['input'],
                    "expected": str(expected),
                    "actual": str(actual),
                    "passed": passed
                })
            except Exception as e:
                results.append({
                    "input": case['input'],
                    "expected": case['expected'],
                    "actual": "Error",
                    "passed": False,
                    "error": str(e)
                })
    finally:
        # Restore stdout
        sys.stdout = original_stdout

    print("__TEST_RESULTS__:" + json.dumps(results))

__run_tests()
`;
                await pyodide.runPythonAsync(testRunnerScript);
            }
        } catch (error: any) {
            // Parse Pyodide error for friendly display
            const errorStr = error.toString();
            const formattedErrors: string[] = [];

            // Try to extract the most relevant error info
            const lines = errorStr.split('\n');

            // Look for the actual error message (usually at the end)
            let errorType = '';
            let errorMessage = '';
            let lineNumber = '';

            for (const line of lines) {
                // Match error type and message (e.g., "TypeError: can only concatenate str")
                const errorMatch = line.match(/^(\w+Error):\s*(.+)$/);
                if (errorMatch) {
                    errorType = errorMatch[1];
                    errorMessage = errorMatch[2];
                }

                // Match line number from traceback (e.g., "line 3, in <module>")
                const lineMatch = line.match(/line\s+(\d+)/);
                if (lineMatch) {
                    lineNumber = lineMatch[1];
                }
            }

            if (errorType && errorMessage) {
                // Format like PyCharm/VSCode
                if (lineNumber) {
                    formattedErrors.push(`❌ ${errorType} on line ${lineNumber}:`);
                } else {
                    formattedErrors.push(`❌ ${errorType}:`);
                }
                formattedErrors.push(`   ${errorMessage}`);
            } else {
                // Fallback: show the full error
                formattedErrors.push('❌ Error:');
                formattedErrors.push(errorStr);
            }

            setOutput(prev => [...prev, ...formattedErrors]);
        } finally {
            setIsRunning(false);
        }
    }, [pyodide]);

    const clearOutput = useCallback(() => {
        setOutput([]);
        setTestResults(null);
    }, []);

    const contextValue = React.useMemo(() => ({
        isLoading,
        isReady,
        loadingMessage,
        runCode,
        output,
        clearOutput,
        isRunning,
        testResults
    }), [isLoading, isReady, loadingMessage, runCode, output, clearOutput, isRunning, testResults]);

    return (
        <PythonContext.Provider value={contextValue}>
            {children}
        </PythonContext.Provider>
    );
};
