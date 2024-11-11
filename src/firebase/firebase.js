// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCbR78em9ht-AI_tlia9t7YauZr3ei-3w",
  authDomain: "ultra-beginner.firebaseapp.com",
  projectId: "ultra-beginner",
  storageBucket: "ultra-beginner.appspot.com",
  messagingSenderId: "301389393222",
  appId: "1:301389393222:web:e37c68d575a48d5fefc947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };