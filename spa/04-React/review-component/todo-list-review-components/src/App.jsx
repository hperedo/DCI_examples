
import { useEffect, useState } from "react"
import Header from "./components/Header.jsx"
import TodoList from "./components/TodoList.jsx"

const App = () => {

    const defaultLanguage = localStorage.getItem("lang")  || "en"

    const [todos,setTodos] = useState([])

    const [lang,setLang] =useState(defaultLanguage)




   useEffect(()=>{

    localStorage.setItem("lang",lang)


   },[lang])    

  return (
    <div>


        <Header   numberOfTasks = {todos.length}   lang={lang} setLang ={setLang}  />
        <hr />
        <TodoList  lang ={lang}   todos = {todos}  setTodos= {setTodos} />




    </div>


  )
}

export default App