import { useEffect, useState } from "react"
import Loader from "./Loader.jsx"
const Users =() => {


const [users,setUsers] =useState(null)


useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(result => setUsers(result))



},[])





console.log(Math.random());

  return (
    <>
        
     <h3    style={{background:"red",margin:"40px"}} >Users from Api </h3>
       
       <ul>

        { users ?   users.map((item,i)=> <li  key={i}  >{item.id}  {item.name} </li>) :<Loader/> }
       </ul>
      
    </>
  )
}

export default Users
