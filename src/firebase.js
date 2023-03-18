import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyBYZpmWlz-gLOzEWm7LddIhU4MR8h8Rosg",
    authDomain: "twitterclone-c0775.firebaseapp.com",
    databaseURL: "https://twitterclone-c0775-default-rtdb.firebaseio.com",
    projectId: "twitterclone-c0775",
    storageBucket: "twitterclone-c0775.appspot.com",
    messagingSenderId: "96524779176",
    appId: "1:96524779176:web:25bba0872beeb9ccaa8c9d"
  };
  //const firebaseApp = firebase.initializeApp(firebaseConfig);////

//const db = firebaseApp.firestore();//
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
