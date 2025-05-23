// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKOaYAJnj6uazLNVBxUyufi4qFnYqfQKE",
  authDomain: "plant-care-app-227e9.firebaseapp.com",
  projectId: "plant-care-app-227e9",
  storageBucket: "plant-care-app-227e9.firebasestorage.app",
  messagingSenderId: "143431000876",
  appId: "1:143431000876:web:a6f10b11d28af1c94c8289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);