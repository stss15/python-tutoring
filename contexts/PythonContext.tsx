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
        setTestResults(null); // Clear previous results

        try {
            // Small delay to ensure UI updates show "Running..."
            await new Promise(r => setTimeout(r, 10));

            let finalCode = code;

            // Inject Test Runner if cases exist
            if (testCases && testCases.length > 0) {
                const testRunnerScript = `
import json
import traceback

def __run_tests():
    test_cases = ${JSON.stringify(testCases)}
    results = []

    for case in test_cases:
        try:
            expected = eval(case['expected']) # Evaluate string "4" to int 4

            # Capture return value
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

    print("__TEST_RESULTS__:" + json.dumps(results))

__run_tests()
`;
                finalCode = code + "\n" + testRunnerScript;
            }

            await pyodide.runPythonAsync(finalCode);
        } catch (error: any) {
            // Pyodide errors formatted as strings
            setOutput(prev => [...prev, error.toString()]);
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
