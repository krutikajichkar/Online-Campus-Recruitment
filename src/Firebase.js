// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr86WHpbF5Yf6HfdAS0D8PYfOIYG4e5vo",
  authDomain: "online-campus-recruitment.firebaseapp.com",
  projectId: "online-campus-recruitment",
  storageBucket: "online-campus-recruitment.appspot.com",
  messagingSenderId: "250915031861",
  appId: "1:250915031861:web:bf91898890710c8aee9a7c",
  measurementId: "G-FHDR8S7B7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


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
  
