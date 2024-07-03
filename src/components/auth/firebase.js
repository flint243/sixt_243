import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/storage';
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyA6SaTAks7KfW7t8Fu03sBwJMK8O5TIMq0",
    authDomain: "projet-sixt.firebaseapp.com",
    projectId: "projet-sixt",
    storageBucket: "projet-sixt.appspot.com",
    messagingSenderId: "955079786651",
    appId: "1:955079786651:web:c26526c58470874ce7863e",
    measurementId: "G-036WHY603S"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = app.storage();




// Initialize Firebase
export {auth, db, storage, firebase as default};


