
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDfyMq9WElKWkUWIY6h27AaeiSBXi3O9DE",
  authDomain: "appdevs-c6e90.firebaseapp.com",
  projectId: "appdevs-c6e90",
  storageBucket: "appdevs-c6e90.appspot.com",
  messagingSenderId: "540695706959",
  appId: "1:540695706959:web:39783fca00f3e6dd5cd93a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)