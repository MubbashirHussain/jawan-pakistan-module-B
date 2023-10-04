// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzUbnx-wvKQ5iygeFDKHNWJbaFKyls3VY",
  authDomain: "react-assignment-91b9d.firebaseapp.com",
  databaseURL: "https://react-assignment-91b9d-default-rtdb.firebaseio.com",
  projectId: "react-assignment-91b9d",
  storageBucket: "react-assignment-91b9d.appspot.com",
  messagingSenderId: "282001271068",
  appId: "1:282001271068:web:f1c795ecfe54133e1432d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app