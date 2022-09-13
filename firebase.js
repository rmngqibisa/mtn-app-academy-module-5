import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEcoSTm0HXPDfZQKBUMCHULQwOyBnHeXk",
  authDomain: "eagle-i-taxbro.firebaseapp.com",
  projectId: "eagle-i-taxbro",
  storageBucket: "eagle-i-taxbro.appspot.com",
  messagingSenderId: "1070833028358",
  appId: "1:1070833028358:web:6d98aab321bc1831576287",
  measurementId: "G-MQWLYXT8EQ"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}


export const auth = firebase.auth();

