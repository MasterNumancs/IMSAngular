// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig2 = {
//   apiKey: "AIzaSyAobZUIidgmQLRvX28BC7HgegIVD5KHY4E",
//   authDomain: "imsangular-ffbf0.firebaseapp.com",
//   projectId: "imsangular-ffbf0",
//   storageBucket: "imsangular-ffbf0.firebasestorage.app",
//   messagingSenderId: "677877853412",
//   appId: "1:677877853412:web:0e434cc471006f0869d0f1",
//   measurementId: "G-NQXGY6JE0H"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const firestore = getFirestore(app);
// export const auth = getAuth(app);

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyAobZUIidgmQLRvX28BC7HgegIVD5KHY4E",
  authDomain: "imsangular-ffbf0.firebaseapp.com",
  projectId: "imsangular-ffbf0",
  storageBucket: "imsangular-ffbf0.firebasestorage.app",
  messagingSenderId: "677877853412",
  appId: "1:677877853412:web:0e434cc471006f0869d0f1",
  measurementId: "G-NQXGY6JE0H"
    };
    const app = initializeApp(firebaseConfig);

// Export Firestore and Authentication instances
export const firestore = getFirestore(app);
export const auth = getAuth(app);