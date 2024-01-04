
import { useState } from "react";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {auth} from '../utils/firebase'


const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const Signin = () => {

    const [email ,setEmail] = useState('')
   
    console.log('Hereeee',auth)

  function onSignin(){
    console.log('OnSignin')
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if(!credential){
            return
        }
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    //const errorCode = error.code;
    //const errorMessage = error.message;
    // The email of the user's account used.
   // const email = error.customData.email;
    // The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  }
  return (
    <div>
        <input type='email' placeholder='Enter the email' onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <button onClick={onSignin}> Signin</button>
    </div>
    
  )
}

export default Signin