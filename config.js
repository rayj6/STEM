// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoAhiYGSvwtjST8oFFCgdhL7-uAARB0Nw",
  authDomain: "test-1a6f9.firebaseapp.com",
  databaseURL: "https://test-1a6f9-default-rtdb.firebaseio.com",
  projectId: "test-1a6f9",
  storageBucket: "test-1a6f9.appspot.com",
  messagingSenderId: "784909958070",
  appId: "1:784909958070:web:aab53e6dee53595c491f17",
  measurementId: "G-RK6RX61PDP",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Database = getDatabase(app);
const Auth = getAuth(app);

export { Database, Auth };
