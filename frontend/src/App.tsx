
import { useEffect } from 'react'
import './App.css'
// import Landing from './components/Landing'
import Signin from './components/Signin'
// Import the functions you need from the SDKs you need
import { onAuthStateChanged } from "firebase/auth";
import {  auth} from "./utils/firebase";
import { RecoilRoot, useRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';
import Topbar from './components/Topbar';
import Card from './components/Card';


function App() {

  return <RecoilRoot>
    <StoreApp/>
  </RecoilRoot>
  
}



function StoreApp (){
  const [user ,setUser] = useRecoilState(userAtom)
  console.log('user is ',user)



  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setUser({
          isLoading : false,
          user : {
            email: user.email
          }
        })
        console.log(user,'userrrrrr')
      } else {
        setUser({
          isLoading : false,
        })
      }
    })
  },[])



  if(user.isLoading){
    return <div>Loading!!!!!!!!</div>
  }

  if(!user.user){
    return <Signin/>
  }
  return (
    <>
    You are logged in as a {user.user?.email}
    <Topbar/>
    <Card>Hi There</Card>
    </>

  )

}

export default App
