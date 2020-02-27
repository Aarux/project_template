import app from "firebase/app";

import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfo5WLy5OjWogfHYUMmQfSxWHNuaGsM4s",
  authDomain: "templatedb-84101.firebaseapp.com",
  databaseURL: "https://templatedb-84101.firebaseio.com",
  projectId: "templatedb-84101",
  storageBucket: "templatedb-84101.appspot.com",
  messagingSenderId: "39297183083",
  appId: "1:39297183083:web:bf54d89c9215c8b26cb02e",
  measurementId: "G-YTKCZGHF7M"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once("value")
          .then(snapshot => {
            const dbUser = snapshot.val();
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
