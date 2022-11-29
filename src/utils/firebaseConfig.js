import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAweAMWWo9Dex2h5j2DmHnCBh2WmtXHmRg",
  authDomain: "decofan-react.firebaseapp.com",
  projectId: "decofan-react",
  storageBucket: "decofan-react.appspot.com",
  messagingSenderId: "1053739694813",
  appId: "1:1053739694813:web:0ac6b03762844d9f863934"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);