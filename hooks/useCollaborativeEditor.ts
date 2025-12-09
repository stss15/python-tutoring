import { useEffect, useRef, useState, useCallback } from 'react';
import * as Y from 'yjs';
import { MonacoBinding } from 'y-monaco';
import { FirebaseProvider } from '../lib/FirebaseProvider';
import type { editor } from 'monaco-editor';

interface CollaboratorInfo {
    name: string;
    color: string;
    isTeacher: boolean;
}

interface UseCollaborativeEditorOptions {
    sessionCode: string | null;
    isTeacher: boolean;
    participantId: string;
    editorInstance: editor.IStandaloneCodeEditor | null;
    monacoInstance: typeof import('monaco-editor') | null;
}

interface UseCollaborativeEditorReturn {
    isConnected: boolean;
    collaborators: Map<number, CollaboratorInfo>;
    setText: (text: string) => void;
    getText: () => string;
}

// Generate a color based on participant ID
const generateColor = (id: string, isTeacher: boolean): string => {
    if (isTeacher) return '#9333ea'; // Purple for teacher
    // Generate consistent color from ID
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = id.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 50%)`;
};

export const useCollaborativeEditor = ({
    sessionCode,
    isTeacher,
    participantId,
    editorInstance,
    monacoInstance
}: UseCollaborativeEditorOptions): UseCollaborativeEditorReturn => {
    const ydocRef = useRef<Y.Doc | null>(null);
    const providerRef = useRef<FirebaseProvider | null>(null);
    const bindingRef = useRef<MonacoBinding | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [collaborators, setCollaborators] = useState<Map<number, CollaboratorInfo>>(new Map());

    // Set text in the shared document
    const setText = useCallback((text: string) => {
        if (ydocRef.current) {
            const ytext = ydocRef.current.getText('monaco');
            ydocRef.current.transact(() => {
                ytext.delete(0, ytext.length);
                ytext.insert(0, text);
            });
        }
    }, []);

    // Get text from the shared document
    const getText = useCallback((): string => {
        if (ydocRef.current) {
            return ydocRef.current.getText('monaco').toString();
        }
        return '';
    }, []);

    useEffect(() => {
        // Only set up collaboration if in a session and editor is ready
        if (!sessionCode || !editorInstance || !monacoInstance) {
            return;
        }

        console.log('[Collab] Setting up collaborative editing for session:', sessionCode);

        // Create Yjs document
        const ydoc = new Y.Doc();
        ydocRef.current = ydoc;

        // Create Firebase provider
        const provider = new FirebaseProvider(`session-${sessionCode}`, ydoc);
        providerRef.current = provider;

        // Set up awareness (cursor positions, user info)
        const awareness = provider.awareness;
        const userColor = generateColor(participantId, isTeacher);

        awareness.setLocalStateField('user', {
            name: isTeacher ? '👨‍🏫 Teacher' : '👨‍🎓 Student',
            color: userColor,
            isTeacher
        });

        // Mark as connected (Firebase is always "connected" if initialized)
        setIsConnected(true);

        // Track collaborators
        const updateCollaborators = () => {
            const states = awareness.getStates();
            const collabs = new Map<number, CollaboratorInfo>();
            states.forEach((state, clientId) => {
                if (state.user && clientId !== awareness.clientID) {
                    collabs.set(clientId, state.user as CollaboratorInfo);
                }
            });
            setCollaborators(collabs);
        };

        awareness.on('change', updateCollaborators);
        updateCollaborators();

        // Get the shared text type
        const ytext = ydoc.getText('monaco');

        // Create Monaco binding (without awareness - cursor sync handled by Firebase)
        const binding = new MonacoBinding(
            ytext,
            editorInstance.getModel()!,
            new Set([editorInstance])
        );
        bindingRef.current = binding;

        console.log('[Collab] Collaborative editing ready (Firebase sync)');

        // Cleanup
        return () => {
            console.log('[Collab] Cleaning up collaborative editing');
            binding.destroy();
            provider.destroy();
            ydoc.destroy();
            ydocRef.current = null;
            providerRef.current = null;
            bindingRef.current = null;
            setIsConnected(false);
            setCollaborators(new Map());
        };
    }, [sessionCode, editorInstance, monacoInstance, isTeacher, participantId]);

    return {
        isConnected,
        collaborators,
        setText,
        getText
    };
};
