

import { NavLink } from "react-router-dom"
import "./Header.scss"

const Header = ({setUser}) => {



const logOutHandle =()=>{

localStorage.removeItem("currentUser")
  
setUser(null)
}


  return (
    <div className="header" >
       
       <div>
        <img src="https://placekitten.com/64/64" alt="" />
       </div>
         
         <ul>
           <NavLink to='about'> <li>  About  </li>  </NavLink>
           <NavLink  to="products"><li>Products</li></NavLink>
           <NavLink   to="contact"  >  <li>Contact</li></NavLink>

            
           
         </ul>
          
          <button   onClick={logOutHandle} >LogOut</button>
    </div>
  )
}

export default Header