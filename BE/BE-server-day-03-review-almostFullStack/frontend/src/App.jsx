import React, { useRef, useState } from "react";

const App = () => {
  const inputValue = useRef();
  const secondINput = useRef();

const [weather,setWeather] = useState(null)




  const submitHandler = () => {
    const data = {
      city: inputValue.current.value,
      username: secondINput.current.value,
    };

    const config = {
      method: "POST",
      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json",
      },
    };

    

    fetch("http://localhost:8000/weather", config)
      .then((response) => response.json())
      .then((result) => setWeather(result));
  };

console.log(weather);

  return (
    <div>
      <input ref={inputValue} type="text" />
      <input ref={secondINput} type="text" name="" id="" />
      <button onClick={submitHandler}>submit</button>


{  weather && <p>the temprature of the city : {weather.city} is {weather.temprature} degree</p> }
     
    </div>
  );
};

export default App;
