// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4HaeqqpLmT-tjyNuR91uFpbOXbGRCLdA",
  authDomain: "hubby-website-auth.firebaseapp.com",
  projectId: "hubby-website-auth",
  storageBucket: "hubby-website-auth.firebasestorage.app",
  messagingSenderId: "1081115722974",
  appId: "1:1081115722974:web:1446c93c4187060458ee4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
