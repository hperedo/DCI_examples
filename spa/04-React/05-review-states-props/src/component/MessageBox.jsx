
import { useState } from "react";
const MessageBox = ()=>{



const [display,setDisplay] = useState(true)

const [count ,setCount] = useState(10)

const [listOfUsers,setListOfUsers] = useState([
    {fName :"Emmanuel", age :24},
    {fName :"Alveena", age :20},
    {fName :"Janos", age :30},
    {fName :"Jay", age :99999999},
    
    ])

const toggleBtn = ()=>{

setDisplay(!display)


 setCount(count + 10 )

}


const deleteUser = (userThatClicked)=>{

 const filteredArr =  listOfUsers.filter(userObj => userObj.fName !=  userThatClicked.fName)


 setListOfUsers(filteredArr)
}



return(

<div>

<button   onClick={toggleBtn}    >Toggle me   {count}  </button>


{display ? <h1>hey i am the h1 lets hide and unhide me</h1>:null}

<hr />

<ul>

{listOfUsers.map((user,i) =><li  onClick={()=> deleteUser(user)}  key={i}> {user.fName}  {user.age}  </li>)}

</ul>


</div>

)


}

export default MessageBox