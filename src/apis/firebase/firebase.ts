import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { firebaseConfig } from "./configFirebase";
import { getFirebaseErrorMessage } from "./utilsFirebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const conectateConGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

const Providers = {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider
}

export {
  auth,
  db,
  doc,
  setDoc,
  conectateConGoogle,
  getFirebaseErrorMessage,
  createUserWithEmailAndPassword,
  signInWithPopup,
  Providers
};
export default app;