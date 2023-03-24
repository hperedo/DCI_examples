
import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserMessageCTX } from '../UserMessageCTX'
import { useContext } from 'react'
const MessageBoard = () => {

  const {setToken, token,messages,setMessages,user,setErrors,errors,setUser}  = useContext(UserMessageCTX) 
  const [deletSuccess,setDeleteSuccess] =useState(false)
console.log(user)
 
  const titleInput = useRef();
  const messageInput = useRef();
  console.log(messages);
useEffect(()=>{
setDeleteSuccess(false)

  const config = {
    headers:{
      "Authorization": `Bearer ${token}`
    }
  }
fetch("http://localhost:5000/api/v1/messages",config)
.then(res=>{
 
  if(!res.ok){
    res.json().then(err=>console.log(err))
     setUser(null)
     console.log("log in again")
     return   localStorage.removeItem('user')
  }  

  
 return res.json()

})
.then(result => {
  console.log(result.reverse())
   setMessages(result)

})

},[deletSuccess])

const submitHandler = (e)=>{

e.preventDefault()

const messageData = {
  title :titleInput.current.value,
  content:messageInput.current.value
}
const config= {
  method:"POST",
  headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  },
  body:JSON.stringify(messageData)
}
 
fetch('http://localhost:5000/api/v1/messages',config)
.then(res=>{
  if(!res.ok){
    res.json().then(err=>{console.log(err)})
    localStorage.removeItem("user")
    setUser(null)
    return
  }
  return res.json()
}).then(result=>{

  setMessages([result,...messages])
})

}


const delteMessage =(id)=>{

console.log(id);

const config= {
method:"DELETE",
headers:{

  "Authorization" : `Bearer ${token}`
}

}

fetch(`http://localhost:5000/api/v1/messages/${id}`,config)
.then(res=>{
if(!res.ok){

  res.json().then(result =>console.log(result))
return
}

return res.json()

}).then(result =>{

  console.log(result);
 setDeleteSuccess(true)
})


}


const logOutHandler = ()=>{

  localStorage.removeItem('token')
  localStorage.removeItem('user')

  setUser(null)
  setToken(null)

}
  return (
    <div>
      <h2>hi  {user.name}</h2>
      <button onClick={logOutHandler}>Log out</button>
      <img width={"100px"} src={`http://localhost:5000/api/v1/users/avatar/${user.avatar.filename}`}  alt="" />
 <h3>MessageBoard</h3>
 <form  onSubmit={submitHandler}>

<input type="text"  ref={titleInput} placeholder='title' />
<br />

<input type="text" ref={messageInput} placeholder='message' />
<br />
    <button type='submit'>Send</button>
 </form>

    <hr />
<ul>
{messages &&  messages.map(msg=> <div>
  <li key={msg._id}> <h1>{msg.author.name}</h1> Title : {msg.title} <p>{msg.content} </p> </li>
   <button  onClick={ ()=>   delteMessage(msg._id)   }  >Delete</button>
</div> ) }

</ul>
    </div>
   

 
  )
}

export default MessageBoard