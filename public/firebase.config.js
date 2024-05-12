// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDJl7dxkX4uOHr15XieXtP0lIXFcDy-hW0",
  // authDomain: "assingmnet-elevent-books.firebaseapp.com",
  // projectId: "assingmnet-elevent-books",
  // storageBucket: "assingmnet-elevent-books.appspot.com",
  // messagingSenderId: "551681821021",
  // appId: "1:551681821021:web:48eae36b4ffe59adbd80b4"
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth