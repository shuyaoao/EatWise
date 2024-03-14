import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-_AQCMFOc_JuQupdAZTl7nT7cSmdMf4c",
    authDomain: "eatwise-b65eb.firebaseapp.com",
    projectId: "eatwise-b65eb",
    storageBucket: "eatwise-b65eb.appspot.com",
    messagingSenderId: "31211564110",
    appId: "1:31211564110:web:060d76494ad787cba2671f"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance
export { db };