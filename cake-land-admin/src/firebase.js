import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBYqXBNPY-R3-g0t3ln1NlRkp_Vl19Teew",
    authDomain: "cakeland-0.firebaseapp.com",
    projectId: "cakeland-0",
    storageBucket: "cakeland-0.appspot.com",
    messagingSenderId: "687679341886",
    appId: "1:687679341886:web:4a4f901a77e38007ad586f",
    measurementId: "G-W19SYRC5Z7"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export { db }