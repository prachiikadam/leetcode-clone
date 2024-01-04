


// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyBomVI60RQS7BrEjErN_S_u4a3GB08arhY",
    authDomain: "leetcodeclone-8bbcb.firebaseapp.com",
    projectId: "leetcodeclone-8bbcb",
    storageBucket: "leetcodeclone-8bbcb.appspot.com",
    messagingSenderId: "532222472025",
    appId: "1:532222472025:web:d60d47a1995d501de82648",
    measurementId: "G-57J8Z231V9"
  };



  export const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
