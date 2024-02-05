// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZOJl-SDNmkILq7NWoJC2PvyDm7UCkPEU",
  authDomain: "netflix-b1329.firebaseapp.com",
  projectId: "netflix-b1329",
  storageBucket: "netflix-b1329.appspot.com",
  messagingSenderId: "1065855832208",
  appId: "1:1065855832208:web:f37d04cdf4fd9b8650c815",
  measurementId: "G-7CJDE8HTPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);