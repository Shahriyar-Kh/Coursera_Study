import logo from './logo.svg';
import './App.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import HomePage from "./HomePage";
import {useState} from "react";


function App() {

  const [loggedin,setLoggedIn]=useState(false)
  
  const login=()=>setLoggedIn(true)
  const logout=()=>setLoggedIn(false)


  return (
    <>
    {loggedin ?(
      <div>
      <HomePage/>
      <LogoutButton logout={logout}/>
      </div>
    ):(
      <LoginButton login={login}/>
    )

    }
    </>
    
  )
}

export default App;
