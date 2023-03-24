

import { createContext } from "react";
import { useReducer } from "react";

export const GameContext = createContext(null)




const GameContextProvidor = ({children}) => {

    const initialState ={number:0,clicks:0 ,target:1337}
    
    const reducer = (previusState,action)=>{


      console.log("previousState," , previusState )
      console.log("action", action);
     if(previusState.target -1 === previusState.number ){

       return {
          number : 0,
          clicks:0,
          target: Math.round(Math.random() * 5000)
       

       }


     }

      if(action.type ==='increment'){
      
       

        return{
            ...previusState,
            number:previusState.number +1,
            clicks :previusState.clicks +1,
         

        }
    

      }else if(action.type==='decrement'){


        return{

            number:previusState.number -1,
          
            target:previusState.target

        }
      }
     else if(action.type==='square'){

        return{

        number :previusState.number ** 2,
        clicks :previusState.clicks +1,
        target:previusState.target


        }
     }

     else if(action.type==='reset'){


        return initialState
     }


     else if(action.type==='cheat' && action.payload.user ==='Anas' ){


        return{
           number:1336,
           clicks:3,
           target:1337

        }
     }else{


        return previusState
     }
    }
    const [state,dispatch] =useReducer(reducer,initialState)




  return (
   
   <GameContext.Provider  value={{state,dispatch}} >
      
     {children}
   </GameContext.Provider>

  )
}

export default GameContextProvidor