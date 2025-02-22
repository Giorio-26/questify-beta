// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGuWld3dNYjo5auhEaY6w4pccnDFukPYQ",
  authDomain: "questify-beta-20164.firebaseapp.com",
  projectId: "questify-beta-20164",
  storageBucket: "questify-beta-20164.firebasestorage.app",
  messagingSenderId: "172200425941",
  appId: "1:172200425941:web:587b63463f2ddb9f2ea55c",
  measurementId: "G-2K5ZXW43QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);