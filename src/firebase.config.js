// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw1nt-cptXQVO5OXApSeS1vqhH1iIGq10",
  authDomain: "otp-project-5d6ac.firebaseapp.com",
  projectId: "otp-project-5d6ac",
  storageBucket: "otp-project-5d6ac.appspot.com",
  messagingSenderId: "143908092530",
  appId: "1:143908092530:web:c83516c7d3af94802ee0eb",
  measurementId: "G-4JTZ8HZHGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);