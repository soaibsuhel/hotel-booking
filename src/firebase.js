import firebase from 'firebase';
import 'firebase/auth';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBttwh2EY4pzEJQsd_2n67ZJe-o3X-hD7Y",
    authDomain: "hotelbooking-5c7f8.firebaseapp.com",
    projectId: "hotelbooking-5c7f8",
    storageBucket: "hotelbooking-5c7f8.appspot.com",
    messagingSenderId: "759687023934",
    appId: "1:759687023934:web:4c54f18c6e87f33cb0306f"
});

export let db = firebaseApp.firestore();
export let auth = firebase.auth();

export default firebase;