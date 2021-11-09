import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBM3zZlVi0C9ygN-WL1HqP7bsgCkNZi2mY",
  authDomain: "reactjs-zingmp3.firebaseapp.com",
  databaseURL: "https://reactjs-zingmp3-default-rtdb.firebaseio.com",
  projectId: "reactjs-zingmp3",
  storageBucket: "reactjs-zingmp3.appspot.com",
  messagingSenderId: "563488751889",
  appId: "1:563488751889:web:15a98eb2ae53f3dfb58cb0",
  measurementId: "G-XWWQFLVY8P"
});
const db = firebaseConfig.firestore();
export default db;