// public/js/firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyAQwBB_aUF0jjmTDXMZXgaXYBp2vUEURC4",
  authDomain: "eplq-main.firebaseapp.com",
  projectId: "eplq-main",
  storageBucket: "eplq-main.appspot.com",
  messagingSenderId: "797120925044",
  appId: "1:797120925044:web:2a2d59618d63169f0f7021",
  measurementId: "G-XG9D5L061Z"
};

// Initialize Firebase with the compat SDK
firebase.initializeApp(firebaseConfig);

// Make Firebase services globally available
const auth = firebase.auth();
const db = firebase.firestore();


