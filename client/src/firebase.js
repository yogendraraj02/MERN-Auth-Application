// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-proj.firebaseapp.com",
  projectId: "mern-auth-proj",
  storageBucket: "mern-auth-proj.appspot.com",
  messagingSenderId: "805363382204",
  appId: "1:805363382204:web:b92ad5ba7400ad87901db9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);