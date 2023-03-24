import  ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import TodosContextProvider from "./TodosContext";
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(

<BrowserRouter>
<TodosContextProvider>
   
   <App /> 
</TodosContextProvider>


</BrowserRouter>)