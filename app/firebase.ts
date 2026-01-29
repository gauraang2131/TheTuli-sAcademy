import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCouL_pmb7nDB7RN1jP1K4UxMp8HlTVKe8",
    authDomain: "roubletuli-a5ce3.firebaseapp.com",
    projectId: "roubletuli-a5ce3",
    storageBucket: "roubletuli-a5ce3.firebasestorage.app",
    messagingSenderId: "177587551750",
    appId: "1:177587551750:web:5cab3b580ede4240aa0d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
