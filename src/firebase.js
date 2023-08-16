import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC-tDj4XCJcvDSn6KfiCvhuSQ8VCdjZIgE",
    authDomain: "netflix-clone-b9ced.firebaseapp.com",
    projectId: "netflix-clone-b9ced",
    storageBucket: "netflix-clone-b9ced.appspot.com",
    messagingSenderId: "17323603366",
    appId: "1:17323603366:web:03b8fbc77a2c21ad1b4b67",
    measurementId: "G-B6H73K70JR"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;