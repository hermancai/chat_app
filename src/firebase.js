import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const app = initializeApp({
  apiKey: "AIzaSyAzoiHjsFj9RETsoYvRz_fo9nELKO_5kO8",
  authDomain: "chatapp-e7cdc.firebaseapp.com",
  projectId: "chatapp-e7cdc",
  storageBucket: "chatapp-e7cdc.appspot.com",
  messagingSenderId: "1750644893",
  appId: "1:1750644893:web:82613f06448bf8c6d93c74",
});

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LfGQxceAAAAABZ5zNv1BtOWIjYBxizirUuNf4jR"),
  isTokenAutoRefreshEnabled: true,
});

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const popUpSignIn = signInWithPopup;

export { auth, provider, db, popUpSignIn };
