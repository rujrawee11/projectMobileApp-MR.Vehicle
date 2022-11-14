import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAm109VLQogmsd_lU60Z-wjQlgiuISxfSU",
    authDomain: "fir-mobile-b0245.firebaseapp.com",
    projectId: "fir-mobile-b0245",
    storageBucket: "fir-mobile-b0245.appspot.com",
    messagingSenderId: "251539828458",
    appId: "1:251539828458:web:9b7dc1bcf1b1608945f193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);