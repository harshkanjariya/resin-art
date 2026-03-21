import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD3sVi2hxTL56VpVjsgcWCO8vNzpfqSj_8",
    authDomain: "art-world-official.firebaseapp.com",
    projectId: "art-world-official",
    storageBucket: "art-world-official.firebasestorage.app",
    messagingSenderId: "842942050793",
    appId: "1:842942050793:web:13752cd47b5fc6ef3ddb78",
    measurementId: "G-WPBXRNRJH4"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
