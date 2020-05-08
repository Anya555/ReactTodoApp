import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyALFMidi6um1KqilX1FEjxUCQhz13BnP6c",
    authDomain: "todolist-4b3b2.firebaseapp.com",
    databaseURL: "https://todolist-4b3b2.firebaseio.com",
    projectId: "todolist-4b3b2",
    storageBucket: "todolist-4b3b2.appspot.com",
    messagingSenderId: "640372971853",
    appId: "1:640372971853:web:2408dfe7fbc958ce4f3f04",
    measurementId: "G-8RHJF6MCHS"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();