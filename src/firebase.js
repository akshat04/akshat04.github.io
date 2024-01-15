
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBDhskQ5FNe7YwDn21oOZq8D64px9_WtdE",
  authDomain: "portfolio-cd31e.firebaseapp.com",
  projectId: "portfolio-cd31e",
  storageBucket: "portfolio-cd31e.appspot.com",
  messagingSenderId: "608857268481",
  appId: "1:608857268481:web:875b1be7f99aae3efffb00",
  measurementId: "G-6T6SLS95D1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);