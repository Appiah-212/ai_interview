import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAreCyeNsj25UTGlrquHMD3pb8AKJlsyac",
  authDomain: "prepinterview-1a4dc.firebaseapp.com",
  projectId: "prepinterview-1a4dc",
  storageBucket: "prepinterview-1a4dc.firebasestorage.app",
  messagingSenderId: "295095431254",
  appId: "1:295095431254:web:a4f58ae5970e75e6e6cbf7",
  measurementId: "G-7K913350T8"
};


const app =!getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);