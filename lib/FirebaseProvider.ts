import * as Y from 'yjs';
import { ref, onValue, set, onDisconnect } from 'firebase/database';
import { db } from '../lib/firebase';

/**
 * Firebase-based Yjs Provider
 * Uses Firebase Realtime Database for syncing Yjs documents
 */
export class FirebaseProvider {
    public doc: Y.Doc;
    public awareness: SimpleAwareness;
    private roomName: string;
    private unsubscribe: (() => void) | null = null;
    private isDestroyed = false;
    private lastUpdate: Uint8Array | null = null;

    constructor(roomName: string, doc: Y.Doc) {
        this.roomName = roomName;
        this.doc = doc;
        this.awareness = new SimpleAwareness(doc);

        if (!db) {
            console.warn('[FirebaseProvider] Firebase not available');
            return;
        }

        // Subscribe to document updates from Firebase
        const docRef = ref(db, `collab/${roomName}/doc`);
        this.unsubscribe = onValue(docRef, (snapshot) => {
            if (this.isDestroyed) return;

            const data = snapshot.val();
            if (data && data.update) {
                try {
                    // Convert base64 to Uint8Array
                    const update = this.base64ToUint8Array(data.update);

                    // Only apply if different from our last update (avoid loops)
                    if (!this.lastUpdate || !this.arraysEqual(update, this.lastUpdate)) {
                        Y.applyUpdate(this.doc, update);
                    }
                } catch (e) {
                    console.error('[FirebaseProvider] Error applying update:', e);
                }
            }
        });

        // Listen for local document changes and sync to Firebase
        this.doc.on('update', (update: Uint8Array, origin: any) => {
            if (this.isDestroyed || origin === 'firebase') return;
            this.syncToFirebase();
        });

        // Subscribe to awareness updates
        const awarenessRef = ref(db, `collab/${roomName}/awareness`);
        onValue(awarenessRef, (snapshot) => {
            if (this.isDestroyed) return;
            const data = snapshot.val();
            if (data) {
                this.awareness.setRemoteStates(data);
            }
        });

        // Sync awareness changes
        this.awareness.on('change', () => {
            if (this.isDestroyed) return;
            const state = this.awareness.getLocalState();
            if (state && db) {
                const clientId = this.awareness.clientID;
                set(ref(db, `collab/${roomName}/awareness/${clientId}`), {
                    ...state,
                    lastUpdated: Date.now()
                }).catch(console.error);

                // Clean up on disconnect
                onDisconnect(ref(db, `collab/${roomName}/awareness/${clientId}`)).remove();
            }
        });

        console.log('[FirebaseProvider] Connected to room:', roomName);
    }

    private syncToFirebase() {
        if (!db || this.isDestroyed) return;

        const state = Y.encodeStateAsUpdate(this.doc);
        this.lastUpdate = state;

        set(ref(db, `collab/${this.roomName}/doc`), {
            update: this.uint8ArrayToBase64(state),
            timestamp: Date.now()
        }).catch(console.error);
    }

    private uint8ArrayToBase64(bytes: Uint8Array): string {
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }

    private base64ToUint8Array(base64: string): Uint8Array {
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        return bytes;
    }

    private arraysEqual(a: Uint8Array, b: Uint8Array): boolean {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    destroy() {
        this.isDestroyed = true;
        if (this.unsubscribe) {
            this.unsubscribe();
        }
        this.awareness.destroy();
        console.log('[FirebaseProvider] Destroyed');
    }

    disconnect() {
        this.destroy();
    }
}

/**
 * Simple Awareness implementation for cursor tracking
 */
export class SimpleAwareness {
    public clientID: number;
    private doc: Y.Doc;
    private states: Map<number, any> = new Map();
    private localState: any = null;
    private listeners: Set<() => void> = new Set();

    constructor(doc: Y.Doc) {
        this.doc = doc;
        this.clientID = doc.clientID;
    }

    setLocalState(state: any) {
        this.localState = state;
        this.states.set(this.clientID, state);
        this.emit();
    }

    setLocalStateField(field: string, value: any) {
        this.localState = { ...this.localState, [field]: value };
        this.states.set(this.clientID, this.localState);
        this.emit();
    }

    getLocalState(): any {
        return this.localState;
    }

    getStates(): Map<number, any> {
        return this.states;
    }

    setRemoteStates(data: Record<string, any>) {
        // Clear old remote states
        const oldSize = this.states.size;

        for (const [clientIdStr, state] of Object.entries(data)) {
            const clientId = parseInt(clientIdStr);
            if (clientId !== this.clientID) {
                // Only keep states updated in last 30 seconds
                if (state.lastUpdated && Date.now() - state.lastUpdated < 30000) {
                    this.states.set(clientId, state);
                }
            }
        }

        // Emit if states changed
        if (this.states.size !== oldSize) {
            this.emit();
        }
    }

    on(event: string, callback: () => void) {
        if (event === 'change') {
            this.listeners.add(callback);
        }
    }

    off(event: string, callback: () => void) {
        if (event === 'change') {
            this.listeners.delete(callback);
        }
    }

    private emit() {
        for (const listener of this.listeners) {
            listener();
        }
    }

    destroy() {
        this.listeners.clear();
    }
}
