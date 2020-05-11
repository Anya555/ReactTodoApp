import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyALFMidi6um1KqilX1FEjxUCQhz13BnP6c",
  authDomain: "todolist-4b3b2.firebaseapp.com",
  databaseURL: "https://todolist-4b3b2.firebaseio.com",
  projectId: "todolist-4b3b2",
  storageBucket: "todolist-4b3b2.appspot.com",
  messagingSenderId: "640372971853",
  appId: "1:640372971853:web:2408dfe7fbc958ce4f3f04",
  measurementId: "G-8RHJF6MCHS"
};


class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore()
  }


  signInWithGoogle = () => {
    const provider = new app.auth.GoogleAuthProvider();
    return this.auth.signInWithPopup(provider);
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName
  }
}

export default new Firebase()