// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword as createUser,
  signInWithEmailAndPassword as signIn,
  signInWithPopup as signInPopup,
  GoogleAuthProvider,
  onAuthStateChanged as authStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  createUser,
  signIn,
  signInPopup,
  GoogleAuthProvider,
  authStateChanged,
  signOut,
  doc,
  setDoc,
  getDoc,
  db,
  collection,
  addDoc,
  storage,
  ref,
  uploadBytes,
};
