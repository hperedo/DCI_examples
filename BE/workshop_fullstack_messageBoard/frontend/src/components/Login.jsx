import React, { useRef } from "react";
import Register from "./Register";
import { UserMessageCTX } from "../UserMessageCTX";
import { useContext } from "react";
const Login = () => {

  const {setToken,setErrors ,setUser} =useContext(UserMessageCTX)
  const emailInput = useRef();
  const passwordInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };

    fetch("http://localhost:5000/api/v1/users/login", config)
      .then((res) => {
        // if(res.status===401){
        //    throw Error('credential failed')

        // }
     
        return res.json();
      })
      .then((result) => {
          console.log(result);
            if (!result.token) {
            return;
            }
           localStorage.setItem("token", JSON.stringify(result.token));
            setToken(result.token);
           localStorage.setItem("user", JSON.stringify(result.user));

            setUser(result.user)
      })
      .catch((err) => {
             console.log(err, "coming from catch");
      });
  };

  return (
    <div>
      <h3>login please!!</h3>
      <form onSubmit={submitHandler}>
        <input type="email" placeholder="email" ref={emailInput} />
        <input type="password" placeholder="password" ref={passwordInput} />
        <br />
        <button type="submit">Login</button>
      </form>
<hr />
      <Register  setErrors={setErrors}/>

    </div>

  );
};

export default Login;
