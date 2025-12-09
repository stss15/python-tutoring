import { initializeApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

// Configuration - uses env vars if available, otherwise fallback to hardcoded values
// Note: Firebase client-side API keys are safe to expose; security is handled by Firebase Rules
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAfOvMVTMhUsz9hMGKK-O_mzTOwJ_M8bBU",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "python-tutoring.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "python-tutoring",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "python-tutoring.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "425234567508",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:425234567508:web:e416a082b7701320ec78c1",
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://python-tutoring-default-rtdb.firebaseio.com"
};

// Check if config is present before initializing
const isConfigured = firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";

let db: Database;

if (isConfigured) {
    try {
        const app = initializeApp(firebaseConfig);
        db = getDatabase(app);
    } catch (error) {
        console.warn("Firebase initialization failed:", error);
        // @ts-ignore
        db = null;
    }
} else {
    console.warn("Firebase config missing. Using local-only mode.");
    // @ts-ignore
    db = null;
}

export { db };
