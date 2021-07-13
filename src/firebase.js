import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjJ2qG11l1uj9MkxG7LWkEL5BIsnNroJQ",
  authDomain: "linkedin-clone-f938d.firebaseapp.com",
  projectId: "linkedin-clone-f938d",
  storageBucket: "linkedin-clone-f938d.appspot.com",
  messagingSenderId: "693497683557",
  appId: "1:693497683557:web:73bc99213b1e78bcf4b08c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
