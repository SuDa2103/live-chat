import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBDP65A7iAd8-x0NaXYWQVYeIhO8lfmCbE",
    authDomain: "udemy-vue-blog-6e46b.firebaseapp.com",
    projectId: "udemy-vue-blog-6e46b",
    storageBucket: "udemy-vue-blog-6e46b.appspot.com",
    messagingSenderId: "85630523171",
    appId: "1:85630523171:web:626118f9d04636482f9e96"
  };

  // init firebase 
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp }