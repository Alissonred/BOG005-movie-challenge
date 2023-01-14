import { initializeApp } from "firebase/app";
import {firebaseConfig} from './firebase-config'
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut  } from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage'
import {getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc} from 'firebase/firestore'



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)/// base de datos
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider();// nuevo obj para inic con googl
export const singUserGoogle = () => signInWithPopup(auth, provider);
export const singUser= (email, password) => signInWithEmailAndPassword(auth, email, password);

export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const userAuthState = (userState)=> onAuthStateChanged(auth,userState)/// info del usuario actualm logeado
export const userExistValidation = (uid)=> getDoc(doc(db, 'users', uid))// donde(base), donde(colecc), que(uid)
export const exisUsername=(username)=> getDocs(query(collection(db,'users'), where('username','==', username)))
export const updateUser =(user)=> setDoc(doc(db, "users", user.uid), user)
export const registerUser =(user)=> setDoc(doc(db, "users", user.uid), user)// setDoc o addDoc para generar documento// dep si importa como se llama o no importa, en este caso importa
// donde - en una coleccion de referencia que req db y nombre
// doc porque pide documento con parametros (donde, nombre de doc)
export const getUserInfo=(uid)=> getDoc(doc(db,'users', uid)).then(res => res.data())
//{displayName: 'alisson', processCompleted: false, profilePicture: '', uid:"jdqBbNcES1YIWFVlqWSAft3DJR42"}
export const loginOut = ()=> signOut(auth);