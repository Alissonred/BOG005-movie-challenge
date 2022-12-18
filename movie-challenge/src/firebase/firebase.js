import { initializeApp } from "firebase/app";
import {firebaseConfig} from './firebase-config'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage'
import {getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc} from 'firebase/firestore'



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider();
export const singUserGoogle = () => signInWithPopup(auth, provider);