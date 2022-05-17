import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAyDChSS1N6w3Iz19JxSwxOSMhWsbiCbZE",
  authDomain: "netflix-clone-782b6.firebaseapp.com",
  projectId: "netflix-clone-782b6",
  storageBucket: "netflix-clone-782b6.appspot.com",
  messagingSenderId: "914308654751",
  appId: "1:914308654751:web:2ced12790a8b461b5f64aa"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };