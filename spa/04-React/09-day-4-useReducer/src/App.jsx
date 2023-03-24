
import './App.css'

import { useContext } from 'react'
import { GameContext } from './GameContext'

const App = () => {

 const {state,dispatch} = useContext(GameContext)


  
  return (
    <div className='App' >
    <h1>Math game with useReducer!! :D</h1>


    <h3>the number is {state.number} and clicks is {state.clicks}  target number is {state.target}</h3>


    <div>

    <button onClick={()=>dispatch({type:'increment'})} >+</button>
    <button  onClick={() => dispatch({type:'decrement'}) }  >-</button>
    <button onClick={()=> dispatch({type:'square' })} >square</button>
    <button onClick={()=> dispatch({type:'reset' })} >reset</button>
    <button onClick={()=> dispatch({type:'cheat' ,payload:{user:'Anas'} })} >cheat</button>




    </div>
       



    </div>
  )
}

export default App