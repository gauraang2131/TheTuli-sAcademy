import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDF68LdR3VGDvWkz2O3Ie-i4VsDlrSIJAs",
    authDomain: "roubletuli-s.firebaseapp.com",
    projectId: "roubletuli-s",
    storageBucket: "roubletuli-s.firebasestorage.app",
    messagingSenderId: "286245235808",
    appId: "1:286245235808:web:0377d3f9d7722692d12705"
};

// Initialize Firebase for SSR compatibility
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
