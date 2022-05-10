// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQoKZ2KuyC7N2vbiaNMa2Hd_5XEB6wUEw",
  authDomain: "netflix-clone-1330d.firebaseapp.com",
  projectId: "netflix-clone-1330d",
  storageBucket: "netflix-clone-1330d.appspot.com",
  messagingSenderId: "849396932912",
  appId: "1:849396932912:web:0ebf0dc615d4cf241aa8f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {auth}
export default db;


