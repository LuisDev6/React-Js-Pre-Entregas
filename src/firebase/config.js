// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArIhIAogHdj1IrkihxD7eqh18PZvoTZfs",
  authDomain: "curso-react-js-4d3cd.firebaseapp.com",
  projectId: "curso-react-js-4d3cd",
  storageBucket: "curso-react-js-4d3cd.appspot.com",
  messagingSenderId: "492876807412",
  appId: "1:492876807412:web:abbf39931197d3f9c1f2a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);