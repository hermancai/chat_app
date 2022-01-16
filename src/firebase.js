import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

const app = initializeApp({
  apiKey: "AIzaSyCB7jMpAYp5yY0KGzcZuyHXTpi0_Y5dboo",
  authDomain: "slack-clone-893d9.firebaseapp.com",
  projectId: "slack-clone-893d9",
  storageBucket: "slack-clone-893d9.appspot.com",
  messagingSenderId: "639307756911",
  appId: "1:639307756911:web:895615f64658d6ee1a649a",
});

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LcCEewdAAAAALp4evA_Zu0WNNsGtkPowCpEom3U"),
  isTokenAutoRefreshEnabled: true,
});

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const popUpSignIn = signInWithPopup;

export { auth, provider, db, popUpSignIn };
