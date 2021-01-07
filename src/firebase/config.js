import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC8ZNZYlTdHl916QeoQJNo8WnztRtTFq-k",
    authDomain: "picto-tiles.firebaseapp.com",
    projectId: "picto-tiles",
    storageBucket: "picto-tiles.appspot.com",
    messagingSenderId: "502207643598",
    appId: "1:502207643598:web:12dd8aac3a32a7db10359f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const projectStorage = firebase.storage()
  export const db = firebase.firestore();
  //export const auth=firebase.auth();
  
  export default firebase;