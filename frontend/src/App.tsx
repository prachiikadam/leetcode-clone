
import { useEffect } from 'react'
import './App.css'
// import Landing from './components/Landing'
import Signin from './components/Signin'
// Import the functions you need from the SDKs you need
import { onAuthStateChanged } from "firebase/auth";
import {  auth} from "./utils/firebase";


function App() {
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user,'userrrrrr')
      } else {
        // User is signed out
        // ...
      }
    })
  })
  return (
  <Signin/>
  )
}

export default App
