import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLZsQOx7DG_-51hR_Gva3K-csdOCZSSyk",
  authDomain: "readinglistapp-v1.firebaseapp.com",
  projectId: "readinglistapp-v1",
  storageBucket: "readinglistapp-v1.appspot.com",
  messagingSenderId: "1011498777023",
  appId: "1:1011498777023:web:eabb923d3327bb1061c90a",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
