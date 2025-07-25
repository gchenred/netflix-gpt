// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjZmlFZI5Mz3ABckZplb2Q-bEkg_LdeIU",
  authDomain: "netflixgpt-69f8f.firebaseapp.com",
  projectId: "netflixgpt-69f8f",
  storageBucket: "netflixgpt-69f8f.firebasestorage.app",
  messagingSenderId: "461248144770",
  appId: "1:461248144770:web:259c10cf2d5e4feaaf1b9b",
  measurementId: "G-CMT3J7EEKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
