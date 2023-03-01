// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth , createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth'
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh1je07AYrPiakSMuwNi2HnDYvcClkV_g",
  authDomain: "online-campus-recruitmen-fedf9.firebaseapp.com",
  projectId: "online-campus-recruitmen-fedf9",
  storageBucket: "online-campus-recruitmen-fedf9.appspot.com",
  messagingSenderId: "961623874948",
  appId: "1:961623874948:web:c6c90c174722321c50d1d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);


export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  export function useAuth() {
     const [currentUser, setcurrentUser] = useState();
  
     useEffect(() => {
       const unsub = onAuthStateChanged(auth , user => setcurrentUser(user) );
       return unsub;
     })
  
     return currentUser ;
  }
  
  export function logOut() {
    return signOut(auth,{
      url:'http://localhost:3000/'
    });
  }
  
  export function signIn(email,password){
    return signInWithEmailAndPassword(auth,email,password);
  }
   
  export function forgotPassword(email){
  return sendPasswordResetEmail(auth,email,{
    url:'http://localhost:3000/login'
  })
  }
  
