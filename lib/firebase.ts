import { initializeApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

// Configuration will be populated by the user
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
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
