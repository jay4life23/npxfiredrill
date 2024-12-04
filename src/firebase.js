// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBdmMzodHVI3ZdwuTDv6qgfhlzyJtoEIbQ",
  authDomain: "npxfiredrill.firebaseapp.com",
  projectId: "npxfiredrill",
  storageBucket: "npxfiredrill.firebasestorage.app",
  messagingSenderId: "961552359765",
  appId: "1:961552359765:web:ffd92b7bc7349f0992cfdc",
  measurementId: "G-JV1H8WQD4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
