import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKOaYAJnj6uazLNVBxUyufi4qFnYqfQKE",
  authDomain: "plant-care-app-227e9.firebaseapp.com",
  projectId: "plant-care-app-227e9",
  storageBucket: "plant-care-app-227e9.appspot.com",
  messagingSenderId: "143431000876",
  appId: "1:143431000876:web:a6f10b11d28af1c94c8289",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
