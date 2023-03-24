import { useEffect, useState } from "react";
import l10n from "./translation.js";


const TodoList = (props) => {

  const {todos,setTodos,lang} = props

const [inputText, setInputText] = useState('')




useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(result =>setTodos(result.map(obj =>obj.title)))



},[])




const submitHandler =(e)=>{

e.preventDefault()

setTodos([  inputText, ...todos])
setInputText("")
}


const onchangeHandler = (e)=>{

setInputText(e.target.value)

}


const deleteTask =(theTaskWeClickedOn)=>{

console.log(theTaskWeClickedOn);

const filteredTasks = todos.filter(x => x!== theTaskWeClickedOn)


setTodos(filteredTasks)
}

  return (
    <div>
      <h3>{l10n[lang].tasks} :</h3>



      <form onSubmit={submitHandler}>

        <input   value={inputText} onChange={onchangeHandler} type="text" />

        <ul>
             {todos.map((todo,i) => <li  onClick={()=> deleteTask(todo)} key={i} >{todo}</li>)}
        </ul>
      </form>



    </div>
  );
};

export default TodoList;
