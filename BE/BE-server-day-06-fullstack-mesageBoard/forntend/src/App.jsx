import { useState } from "react";
import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const nameInputValue = useRef();
  const messageInputValue = useRef();
  const [msgs,setMsgs] =useState(null)

useEffect(()=>{


const config ={
 headers:{

     "API-KEY": "FBW-E05"

 }
}


fetch('/messages',config)
.then(response =>response.json())
.then(result =>{

  console.log(result);
   if(result.error){
     
    console.log(result.error)
   }else{

      setMsgs(result)
   }


}).catch(err =>{

  console.log(err.message)
})


},[])


  const submitHandler = (e) => {


    e.preventDefault();



    const data = {
      name: nameInputValue.current.value,
      message: messageInputValue.current.value,
    };

    const url = "/messages";

    const config = {
      method: "POST",
      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json",
        "API-KEY": "FBW-E05"
        
      },
    };


    

fetch(url,config)
.then(response =>response.json())
.then(result =>{
  console.log(result)
  setMsgs([...msgs,result.message])
})

  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br />
        <input ref={nameInputValue} placeholder="name" type="text" />
        <br />
        <br />

        <textarea ref={messageInputValue} placeholder="message" type="text" />
        <br />
        <br />

        <button type="submit">submit</button>
      </form>


      <ul>
        {msgs && msgs.map(msg => <li key={msg.id}> {msg.name} : { msg.message}   </li>)}
      </ul>
    </div>
  );
}

export default App;
