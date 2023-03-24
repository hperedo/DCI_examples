# SPA - Component - 3


## Introduction: Each component has a lifecycle


- A (functional) component lifecycle consists of three distinct parts

  1. Initial render -----> component is being added to the page
  2. Update/Re-render ---> component is re-rendered (state or props changed)
  3. Unmount ------------> component is no longer present on the page and is deleted


```js

    function CounterBtn (){

       const [counter,setCounter] = useState(0)
        

        const [display,setDisplay] = useState(true)

        console.log("hihihihiihihi")

      return(

       <button   onClick = {()=> setCounter(counter + 1) }  >  {counter}  </ button>

      )

    }


```

- Sometimes you want to run some code just the _first_ time a component is rendered
- Sometimes you want to run some code just the _last_ time a component is rendered (cleanup)
- Sometimes you want to run some code when a specific state variable changes
- Sometimes you want to run some code every time anything changes (example above)


- We have a hook that helps us do stuff on these different stages

  - `useEffect(effect, dependencies)`    

  - the "effect" is a function to run
  - the "dependencies" is an optional array that controls _when_ the function runs



