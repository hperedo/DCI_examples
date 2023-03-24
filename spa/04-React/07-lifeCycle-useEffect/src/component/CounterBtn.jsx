import { useEffect, useState } from "react";

export default function CounterBtn() {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log("Effect in after first Render  ");
  }, []);


  useEffect(() => {
    console.log("Effect after first Render and after counter state variable changes ");
  }, [counter]);



  useEffect(() => {
    console.log("Effect after first Render and also after dispaly state variable changes ");
  
    //   const inteval= setInterval(() => {
        
    //      console.log("suiiiiiiii");


    //   }, 1000);

    return function(){
      console.log("clean up function ran");
    //    clearInterval(inteval)

    }


}, [display]);




  console.log(counter);
  console.log(display);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}> {counter} </button>
      <hr />
      <button onClick={() => setDisplay(!display)} >  Toggle </button>
      {display &&  <h1> hide an and hide me</h1> }
     
    </div>
  );
}
