
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
export const firebaseConfig = {
  apiKey: "AIzaSyD6KYilmbPT08LhMcBJRFx9VNWIXh_khwI",
  authDomain: "emobile-d0117.firebaseapp.com",
  projectId: "emobile-d0117",
  storageBucket: "emobile-d0117.appspot.com",
  messagingSenderId: "153167676381",
  appId: "1:153167676381:web:acd7d28e7ec6940c76ac34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth=getAuth(app);
let db=getFirestore(app);
let storage=getStorage(app);
export default app;

export {auth,db,storage};