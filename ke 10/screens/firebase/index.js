import firebase from 'firebase'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyA13qvo_ocSu7YthSDbYwXOXSFa-avsDyI",
    authDomain: "aryvape-514bd.firebaseapp.com",
    projectId: "aryvape-514bd",
    storageBucket: "aryvape-514bd.appspot.com",
    messagingSenderId: "105676067326",
    appId: "1:105676067326:web:e9a49b6783d72a319630af",
    measurementId: "G-X9D5WMSKSM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore()
  export default{
      firebase,db
  }