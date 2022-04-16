// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm4l31vsUs3m6Tgnl6bffFJnBzSSt5VLg",
  authDomain: "doctor-chamber-bd.firebaseapp.com",
  projectId: "doctor-chamber-bd",
  storageBucket: "doctor-chamber-bd.appspot.com",
  messagingSenderId: "640857131004",
  appId: "1:640857131004:web:f20e7202edd6354752d479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default app;