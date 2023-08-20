// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c2fee.firebaseapp.com",
  projectId: "mern-auth-c2fee",
  storageBucket: "mern-auth-c2fee.appspot.com",
  messagingSenderId: "664522943751",
  appId: "1:664522943751:web:24977afdafbe57fe6f69a2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);