// Recommended to import first css files
import "./style.css";
import { useState } from "react";

const Register = (props) => {
  const [user, setUser] = useState({
    name: "",
    married: false,
  });

  // const [name, setName] = useState('Person');
  // const [married, setMArried] = useState(true)

  const handleName = (e) => {
    // console.log(e.target.value)
    // name = e.target.value
    // setName(e.target.value)
    // console.log("\u001b[33m" + name)
    // let newUser = {
    //     name: e.target.value,
    //     married: user.married
    // }
    // setUser(newUser)
    setUser({ ...user, name: e.target.value });
  };

  const handleMarried = (e) => {
    // console.log(e.target.checked)
    // setMArried(e.target.checked)
    // console.log(married)
    // let newUser = {
    //     name: user.name,
    //     married: e.target.checked
    // }
    // setUser(newUser)
    console.log(e);
    setUser({ ...user, married: e.target.checked });
  };

  return (
    <>
      <h2>Register Component: {user.name}</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* <input
          type="text"
          onChange={handleName}
          placeholder="write Your Name"
          value={user.name}
        /> */}
        <input
          type="text"
          onChange={(e)=>setUser({ ...user, name: e.target.value })}
          placeholder="write Your Name"
          value={user.name}
        />
        <br />
        <label htmlFor="">Married: </label>
        <br />
        <input
          type="checkbox"
          checked={user.married}
          onChange={handleMarried}
        />

        <hr />
        <button>Submit</button>
        {/* <input type="submit" value="Submit input button" /> */}
      </form>
    </>
  );
};

export default Register;
