// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsP2NUbcr0zZssMLkByzg3MMjsEdBTjtY",
  authDomain: "book-inventory-ace1b.firebaseapp.com",
  projectId: "book-inventory-ace1b",
  storageBucket: "book-inventory-ace1b.appspot.com",
  messagingSenderId: "191888899098",
  appId: "1:191888899098:web:bbff77ec27094a30dea5a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;