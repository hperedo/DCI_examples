import CounterBtn from "./component/CounterBtn.jsx"
import {useState} from 'react'
import Users from "./component/Users.jsx"
import Loader from "./component/Loader.jsx"
const App = () => {
const [show,setShow]= useState(true)


  return (
    <div>
<h1>wiiiiiiiiiiiiiiiiiii</h1>
<button onClick ={()=> setShow(!show)   }> Toggle Counter Component  </button>

{/* {show && <CounterBtn /> } */}
  

  <Users />

    </div>
  )
}

export default App