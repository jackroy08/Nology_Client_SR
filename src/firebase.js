import firebase from "firebase/app";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDqsbZFmp_VqfQb6bwGCDGBbqgcZvjDIm4",
    authDomain: "shiftreporter-3420e.firebaseapp.com",
    databaseURL: "https://shiftreporter-3420e.firebaseio.com",
    projectId: "shiftreporter-3420e",
    storageBucket: "shiftreporter-3420e.appspot.com",
    messagingSenderId: "1050190735525",
    appId: "1:1050190735525:web:6f2b5b8594aeaa7355854c",
    measurementId: "G-9QY0TP48NQ"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase
