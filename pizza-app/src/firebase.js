// //configuration-firebase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getAuth, onAuthStateChanged} from 'firebase/auth';
// import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // Initialize Firebase
// const firebaseConfig = initializeApp({
//   apiKey: "AIzaSyCX4vdagT_jAVFi1dAHjGMbk0sfuZFJbCs",
//   authDomain: "pizza-app-cff4c.firebaseapp.com",
//   projectId: "pizza-app-cff4c",
//   storageBucket: "pizza-app-cff4c.appspot.com",
//   messagingSenderId: "383010025901",
//   appId: "1:383010025901:web:0a2f905e8e0ea08ffb7124",
//   measurementId: "G-MBK9C6HP2E"
// });

// const auth= getAuth(firebaseConfig);//idva ot firebase, gotova funkciq za authentication i si q zapazvam tuk;
// const db = getFirestore(firebaseConfig);

// onAuthStateChanged(auth, user=>{
//     if(user!= null){
//         console.log('logged in!');
//     }else{
//         console.log('No user!');
//     }
// })



// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
// const analytics = getAnalytics(app);
// export {auth}; //i si q exportvam tuk

