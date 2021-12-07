// Importando Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Para config Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDefQfAcol6CDz-fjBnuYBKkIMbZfR40TM",
    authDomain: "tiendareact2021.firebaseapp.com",
    projectId: "tiendareact2021",
    storageBucket: "tiendareact2021.appspot.com",
    messagingSenderId: "607959289035",
    appId: "1:607959289035:web:6fb6acb6fc41367cc49f4e",
    measurementId: "G-J3CD3STXHW"
};

// Inicializando Firebase
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore();
firebase.auth = firebase.auth();

export default firebase;