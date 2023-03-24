
import { createContext, useState ,useEffect} from "react";



export const TodosContext = createContext(null)


const defaultTasks = JSON.parse(localStorage.getItem('allTasks'))  || []



const TodosContextProvider = ({children}) => {




const [tasks,setTasks]=useState(defaultTasks)



useEffect(()=>{

  localStorage.setItem('allTasks',JSON.stringify(tasks) )

},[tasks])



  return (
   <TodosContext.Provider    value={{tasks,setTasks}}>

{children}
     

   </TodosContext.Provider>
  )
}

export default TodosContextProvider