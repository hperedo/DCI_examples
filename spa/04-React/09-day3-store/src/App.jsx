import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.scss'

import { Routes,Route } from 'react-router-dom';
import Todos from './components/Todos';
const App = () => {
  return (
    <div className="App">

      

      <Routes>
       
       <Route    path='/'   element={<Home/>} />
       <Route    path='todos'   element={<Todos/>} />



      </Routes>

    </div>
  )
}

export default App