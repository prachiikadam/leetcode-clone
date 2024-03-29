import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth} from "../utils/firebase";


const Topbar = () => {
  return (
    <div className="max-w-screen w-full bg-black min-h-52">
        <img src="/logo.jpg" className="p-4 w-2/12 h-40" alt="my logo"/>
        <NavBar/>

    </div>
  )
}


const navitems = [
    {
        name :'About',
        route :'/about'
    },
    {
        name :'Activity',
        route :'/activity'
    },
    {
        name :'Problems',
        route :'/problems'
    },
    {
        name :'Competitions',
        route :'/competitions'
    },
    {
        name :'Leaderboard',
        route :'/leaderboard'
    },
    {
        name :'Logout',
        route :'/login'
    }

]

const NavBar = () =>{
    return (
        <div className="text-gray-400 flex flex-row font-sans">
            {
                navitems.map((item)=><NavItem route={item.route} title={item.name}/>)
            }
        </div>
    )
}


const NavItem = ({route ,title}:{route:string ,title:string}) =>{

    const handleSigninSignout = async() =>{
        await signOut(auth)
    }
    return( 
        <div>
        {route === '/login' ? <button onClick={handleSigninSignout}>{title}</button>   :<Link to = {route}><div className="ml-8 mr-8 cursor-pointer hover:font-bold hover:text-white" >{title} </div></Link>}
        </div>
    )
}

export default Topbar