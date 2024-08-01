import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsPRLfG8ZFwpbdDH3AU3MKlHWOymMu8u0",
  authDomain: "netflix-gpt-3a998.firebaseapp.com",
  projectId: "netflix-gpt-3a998",
  storageBucket: "netflix-gpt-3a998.appspot.com",
  messagingSenderId: "439732881261",
  appId: "1:439732881261:web:ac3cc602590bc335b3fc64",
  measurementId: "G-H98W7BVR1S"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
