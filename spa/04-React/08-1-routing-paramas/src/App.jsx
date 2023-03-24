

import Header from "./components/Header"
import Main from "./components/Main"
import './App.scss'
import { useEffect, useState } from "react"
import Login from "./components/Login"

const currentUser = JSON.parse(localStorage.getItem("currentUser"))     

console.log(currentUser);
const App = () => {

const [user ,setUser] =useState(currentUser)


useEffect(()=>{

 localStorage.setItem("currentUser",JSON.stringify(user))


},[user])

  return (
    <div>
   <Header   setUser={setUser} />
   {user ?   <Main /> :<Login   setUser ={setUser}/>}

          
    </div>
  )
}

export default App