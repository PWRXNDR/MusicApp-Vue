import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBmAisfD0VL2B1lUy-fPNHpjF7_eTPQyr0",
    authDomain: "music-7d5d2.firebaseapp.com",
    projectId: "music-7d5d2",
    storageBucket: "music-7d5d2.appspot.com",
    messagingSenderId: "1092188379739",
    appId: "1:1092188379739:web:947b880c2bef35568b7d7e",
    measurementId: "G-Q02ZR8N24R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
