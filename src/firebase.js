import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAdlqXpQCaKtKsSj9yr4skKZgu_p_3bdfw",
    authDomain: "twitter-clone-ms.firebaseapp.com",
    databaseURL: "https://twitter-clone-ms.firebaseio.com",
    projectId: "twitter-clone-ms",
    storageBucket: "twitter-clone-ms.appspot.com",
    messagingSenderId: "396421596048",
    appId: "1:396421596048:web:ef6c51fae9bc95410f2915",
    measurementId: "G-NEFHK6XPC9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export {db, firebase}