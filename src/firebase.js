// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAomUp0mdxDZKyFeoQ9f5wvTRt1Pl0OogU",
  authDomain: "financebros-64582.firebaseapp.com",
  projectId: "financebros-64582",
  storageBucket: "financebros-64582.appspot.com",
  messagingSenderId: "333746139961",
  appId: "1:333746139961:web:1fbb162f407e27e66e2ee8",
  measurementId: "G-GV9LQGMDZX"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export { firebase };