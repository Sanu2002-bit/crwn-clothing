import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAz0hfa_PR5VzrBrLM6mUjE9uYzxnv50uQ",
    authDomain: "crwn-clotthing.firebaseapp.com",
    projectId: "crwn-clotthing",
    storageBucket: "crwn-clotthing.appspot.com",
    messagingSenderId: "670387281420",
    appId: "1:670387281420:web:6fb9d1494b306d26d65829",
    measurementId: "G-K74VS2CPHZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
