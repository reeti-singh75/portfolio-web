import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDp3VI7lHwsZTaQE_6FTvekGmQaS9ENp3Y",
  authDomain: "portfolio-contact-form-846d7.firebaseapp.com",
  projectId: "portfolio-contact-form-846d7",
  storageBucket: "portfolio-contact-form-846d7.firebasestorage.app",
  messagingSenderId: "119224312744",
  appId: "1:119224312744:web:d481b897dc505afa7d339d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore export (IMPORTANT)
export const db = getFirestore(app);

// Auth export for admin panel
export const auth = getAuth(app);