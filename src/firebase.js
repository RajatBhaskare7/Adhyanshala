import firebase from 'firebase'

const firebaseConfig = {
     apiKey: "AIzaSyDdNkI5y-AQfBP0cpdpoU8Fp7qzxZLCwAo",
  authDomain: "adhyanshala.firebaseapp.com",
  databaseURL: "https://adhyanshala-default-rtdb.firebaseio.com",
  projectId: "adhyanshala",
  storageBucket: "adhyanshala.appspot.com",
  messagingSenderId: "1074436985616",
  appId: "1:1074436985616:web:02f1258a4ac58b8d508b95",
  measurementId: "G-FM2SRP2TR4"

  };
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage , firebase as default};