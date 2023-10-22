import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmOSs1KsCGC8ZPVyKkdi8UxJ_kJMTN2p8",
  authDomain: "crown-clothing-db-5a371.firebaseapp.com",
  projectId: "crown-clothing-db-5a371",
  storageBucket: "crown-clothing-db-5a371.appspot.com",
  messagingSenderId: "226616183442",
  appId: "1:226616183442:web:04a2b6856611d3d7af344b",
};

//Code for Initializing the Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Code for Authentication Service
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//Methods of GoogleAuthProvider
export const googleSignInWithPopUp = () => signInWithPopup(auth, provider);
export const googleSignInWithRedirect = () =>
  signInWithRedirect(auth, provider);

//Function to add a user to Database after we get the details from Google Sign in method or Email/Password Signup Method
export const addUserDataToDatabase = async (user, additionalDetails) => {
  const docRef = doc(db, "registeredUsers", user.uid);
  const docSnap = await getDoc(docRef);
  let { displayName, email } = user;

  if (!displayName) {
    displayName = additionalDetails.displayName;
  }
  const registeredAt = new Date();
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      displayName,
      email,
      registeredAt,
    });
  }
  return docSnap;
};

//Code for Database
//Initiliazing Database
export const db = getFirestore();
//Ref to registeredUsers collection
export const collectionRef = collection(db, "registeredUsers");
//Ref to categories collection which holds all the products for the store
export const productCollectionRef = collection(db, "categories");
