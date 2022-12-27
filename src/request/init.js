
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDzy4B8TrDOsIS7mgicrPEso_Z60e9IHJ4",
  authDomain: "my-academy-782b1.firebaseapp.com",
  projectId: "my-academy-782b1",
  storageBucket: "my-academy-782b1.appspot.com",
  messagingSenderId: "464435779524",
  appId: "1:464435779524:web:de41fa072c750086e13691"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

const docRef = doc(db,"students","0001")

export { db }
