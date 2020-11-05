import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXH4B8ZkGCdFQhJ23q3cxw8lqbZuhLC8E",
  authDomain: "shift-reporter-test.firebaseapp.com",
  databaseURL: "https://shift-reporter-test.firebaseio.com",
  projectId: "shift-reporter-test",
  storageBucket: "shift-reporter-test.appspot.com",
  messagingSenderId: "661586612018",
  appId: "1:661586612018:web:ece44f017c682ff0aa112b",
  measurementId: "G-LSBKHFM7KV"
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase
