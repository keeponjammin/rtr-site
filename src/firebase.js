import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAmyhrAURSP4uPGTjgASanv61AhFlUtlh4",
  authDomain: "vue-band.firebaseapp.com",
  projectId: "vue-band",
  storageBucket: "vue-band.appspot.com",
  databaseURL: 'vue-band.europe-west1.firebasedatabase.app',
  messagingSenderId: "162070937581",
  appId: "1:162070937581:web:a4ac80f5d723469b63b1e4",
  measurementId: "G-GH0X0T3572"
};


// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);

export let fireDB = getFirestore(firebaseApp);