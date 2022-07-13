//configuration-firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX4vdagT_jAVFi1dAHjGMbk0sfuZFJbCs",
  authDomain: "pizza-app-cff4c.firebaseapp.com",
  projectId: "pizza-app-cff4c",
  storageBucket: "pizza-app-cff4c.appspot.com",
  messagingSenderId: "383010025901",
  appId: "1:383010025901:web:0a2f905e8e0ea08ffb7124",
  measurementId: "G-MBK9C6HP2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= app.auth();//idva ot firebase, gotova funkciq za authentication i si q zapazvam tuk
const analytics = getAnalytics(app);
export {auth}; //i si q exportvam tuk