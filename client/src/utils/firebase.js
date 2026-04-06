
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "nexhire-8b112.firebaseapp.com",
  projectId: "nexhire-8b112",
  storageBucket: "nexhire-8b112.firebasestorage.app",
  messagingSenderId: "1060100391418",
  appId: "1:1060100391418:web:5016313e8a5007e6846443"
};


const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const provider=new GoogleAuthProvider()

export {auth,provider};