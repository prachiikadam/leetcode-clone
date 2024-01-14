
import { useState } from "react";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {auth} from '../utils/firebase'


const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


const Signin = () => {
   
   

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
    <div className="bg-black w-full h-screen flex flex-row items-center justify-center ">
        <div className="bg-slate-50 w-[400px] h-[400px] border rounded-md">
            <div className="flex flex-col justify-center items-center ">
              <img src="../../public/1.png" className="w-[100px] h-[100px] mt-28"/>
              <button onClick={onSignin} className=" border rounded mt-8 flex flex-row items-center justify-center m-2">
                <img className = "w-[40px]" src="../../public/google.png" />
                <span className="pr-4"> Continue With Google </span>
              </button>
            </div>
          
        </div>
    </div>
    
  )
}

export default Signin