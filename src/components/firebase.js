import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUFawnNZXsqbREKoRiE8k-bwvZZmo96VA",
    authDomain: "clone-e4b53.firebaseapp.com",
    projectId: "clone-e4b53",
    storageBucket: "clone-e4b53.appspot.com",
    messagingSenderId: "127546455087",
    appId: "1:127546455087:web:637563218243c5251242da",
    measurementId: "G-G3M1C8VGQR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };