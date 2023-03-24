import React, { useRef } from "react";

const Register = ({setErrors}) => {
  const emailInput = useRef();
  const nameInput = useRef();
  const passwordInput = useRef();
  const  fileInput = useRef()
  const submitHandler = (e) => {
    e.preventDefault();
    // const registerData = {
    //   email: emailInput.current.value,
    //   name: nameInput.current.value,
    //   password: passwordInput.current.value,
    // };


    const formData = new FormData()
    formData.append('email' , emailInput.current.value)
    formData.append('name' , nameInput.current.value)
    formData.append('password' , passwordInput.current.value)
    formData.append('selectedFile',fileInput.current.files[0])



    console.log(fileInput.current.files[0]);
    const config = {
      method:"POST",
      body : formData
    };

    fetch("http://localhost:5000/api/v1/users/register",config)
    .then(res=>{
        if(!res.ok){

            return res.json().then(err=>{
                console.log(err);
                setErrors(err)
            })
        }
        return res.json()
    }).then(result=>{

        console.log(result);
    }).catch(err=>{
        setErrors(err)
        console.log(err);
    })
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="email" ref={emailInput} placeholder="email" />
        <input type="password" ref={passwordInput} placeholder="password" />
        <input type="text" ref={nameInput} placeholder="name" />
        <input type="file"  ref={fileInput}   placeholder="profile pic" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
