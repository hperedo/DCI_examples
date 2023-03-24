

const Alert = ({messageAlert,show})=>{
console.log(show);

//  !show &&  null 
//  if(!show)return null   

return (
    <>
{show &&  <div>

    <h3>{messageAlert}</h3>
</div>  }

    </>














)

}


export default Alert