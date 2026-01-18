import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyByGDyKSJkixjzjXwWwYSQNO2dAIHXPwoQ",
  authDomain: "sejalan-b746e.firebaseapp.com",
  projectId: "sejalan-b746e",
  storageBucket: "sejalan-b746e.firebasestorage.app",
  messagingSenderId: "999483065030",
  appId: "1:999483065030:web:8058bcffe50210d6588dc7"
};

const app = initializeApp(firebaseConfig);

// 🔐 Auth
export const auth = getAuth(app);

// 🗂️ Firestore
export const db = getFirestore(app);
