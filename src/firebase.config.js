/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const FIREBASE_API_KEY = import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID
const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID= import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDucuXybPInKzv6kUdCtgILJSCbeyEuOXs",
  authDomain: "house-marketplace-app-53bfe.firebaseapp.com",
  projectId: "house-marketplace-app-53bfe",
  storageBucket: "house-marketplace-app-53bfe.appspot.com",
  messagingSenderId: "892640687437",
  appId: "1:892640687437:web:ef6c2b2fea4258e62b7304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();