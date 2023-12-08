// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZRh_1LB855_xbgt_R4JTfRX8qODerKsI",
  authDomain: "doctors-portal-d28a6.firebaseapp.com",
  projectId: "doctors-portal-d28a6",
  storageBucket: "doctors-portal-d28a6.appspot.com",
  messagingSenderId: "683155734871",
  appId: "1:683155734871:web:ea56af32a2e18e9268fe12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;