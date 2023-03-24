import { useRef, useState } from "react"




const Login = ({setUser}) => {


  const inputEmail = useRef(null);
  const inputPassword = useRef(null)





//     const [emailINput,setEmailInput]= useState('')
// console.log(setUser);


// const emailHandle =(e)=>{

//     setEmailInput(e.target.value)
// }



const submitForm =(e)=>{

e.preventDefault()

setUser({
    email:inputEmail.current.value,
     password:inputPassword.current.value
})
}



  return (
    <div>
     <h3>login please!</h3>
     <form onSubmit={submitForm}  >


     <input type="email" ref={inputEmail}  placeholder="type your Email" />
         
         <input type="password"  ref={inputPassword} placeholder="type password" />
         
         <button >Login</button>

         {/* <input type="email" value={emailINput}  onChange={emailHandle} placeholder="type your Email" />
         
         <input type="password" placeholder="type password" />
         
         <button >Login</button> */}

     </form>

    </div>
  )
}

export default Login