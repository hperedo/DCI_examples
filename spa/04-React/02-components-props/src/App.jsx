
import ListOfAdmins from "./components/ListOfAdmins.jsx"



export default function App(){


const adminArr = ["Sarnia","Chandu","Trump","karDashian"]



return(

<div className="main">


<h1>lets do this ......</h1>

<ListOfAdmins   admins = {adminArr}   message ="here is the list of Admins "  />

</div>

)


 }