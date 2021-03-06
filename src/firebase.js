import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDnAqBe9X0jl2ZWQSHJuROUWVfINBn6gpA",
    authDomain: "event-manager-afb97.firebaseapp.com",
    projectId: "event-manager-afb97",
    storageBucket: "event-manager-afb97.appspot.com",
    messagingSenderId: "681365067729",
    appId: "1:681365067729:web:aa06f1ba16b4eab62672f0",
    measurementId: "G-FB2ZHHFY13"
  };
  export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider,auth, database as default};