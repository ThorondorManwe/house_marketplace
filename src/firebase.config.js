/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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