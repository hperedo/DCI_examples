
import  Alert from "./Alert.jsx"


const ListOfAdmins = (props) => {
///props is an object
   
   const {admins,message} = props


  return (
    <div>

   
<ul>
<h1>{message} </h1>

{admins.map((admin,i) =><li key={i}> {admin} </li> )}

</ul>

<Alert  messageAlert = "hey one of the admins is sick" show ={false} />
</div>
  )
}

export default ListOfAdmins