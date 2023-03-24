import { createContext, useState } from "react"

export const UserMessageCTX = createContext(null)


const defaultToken =JSON.parse(localStorage.getItem('token'))  || null 
const defaultUser =JSON.parse(localStorage.getItem('user'))  || null 

const   UserMessageCTXProvider = ({children})=>{


    const [user,setUser]=useState(defaultUser)
    const [token,setToken] = useState(defaultToken)
    const [errors,setErrors]=useState(null)
    
    const [messages,setMessages]=useState(null)



return(

    <UserMessageCTX.Provider  value={{user,setUser,errors,setErrors,messages,setMessages,token,setToken}} >

        {children}

    </UserMessageCTX.Provider>
)

}


export default UserMessageCTXProvider