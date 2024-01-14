
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
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import SubmissionActivity from './components/SubmissionActivity';
import Landing from './components/Landing';
import About from './components/About';
import { SubmissionActivityList } from './components/SubmissionActivityList';
import ProblemList from './components/ProblemList';



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
    <div className='max-w-[1280px] ml-auto mr-auto'>
    You are logged in as a {user.user?.email}
    
    <Router>
    <Topbar/>
      <Routes>
        <Route path= '/about' element ={<About/>}/>
        <Route path= '/activity' element ={<SubmissionActivityList/>}/>
        <Route path= '/problems' element ={<ProblemList/>}/>
        <Route path= '/login' element ={<Signin/>}/>


      </Routes>
     
      {/* <Card>Hi There</Card> */}
    </Router>
    </div>

  )

}

export default App
