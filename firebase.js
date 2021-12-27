// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAz8dFDO-BpidUc8p0wp-uJO_VwpaEU2TE',
  authDomain: 'reactnative-chat-522f2.firebaseapp.com',
  projectId: 'reactnative-chat-522f2',
  storageBucket: 'reactnative-chat-522f2.appspot.com',
  messagingSenderId: '394225491403',
  appId: '1:394225491403:web:3f81c67d7874a7fa206a4e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storgage = getStorage();
export const db = initializeFirestore(app);

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
