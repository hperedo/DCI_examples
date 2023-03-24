import { useEffect } from "react"
import { useNavigate } from "react-router-dom"




const NotFound = () => {


    const navigate = useNavigate()

useEffect(()=>{

  const timeout= setTimeout(()=>{

   navigate("/products")


 },5000)


 return ()=>{
console.log("useEffect function aftre removing the component")
  clearTimeout(timeout)

 }


},[])

    
  return (
    <div>
     <h1>404 : the Page is not found!!</h1>
       
       <p>you will be redurected automatically in 5 second</p>

    </div>
  )
}

export default NotFound