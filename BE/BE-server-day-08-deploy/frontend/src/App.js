import './App.css';
import {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
// when App component loaded:
useEffect(()=>{
  // ask the server(backend) for something
  fetch('/api/users', {
    method: "GET"// by default is "GET"
  }).then(response=>{
    response.json().then(data=>{
      // console.log(data)
    }).catch(error=>{
      // there is data but not object
      // console.log(error)
    })
  }).catch(error=>{
    // console.log(error)
  })
  // promise : function.then().catch()
  // fetch().then(... processing(convert response to object response.json().then().catch())).catch()
}, [])

  return (
    <BrowserRouter>
    {/* Static Navbar */}
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </BrowserRouter>
  );
}


// define Home Component
const Home = ()=>{
  return(
    <div>
      <h1>Home Component</h1>
    </div>
  )
}

// Define Component
const About = ()=>{
  /**
   * message Object: {
   *  id: 0,
   *  title: "MessageTitle",
   *  body: "MessageBody"
   * }
   */
  
  const [messages, setMessages] = useState([])
  // when About component loaded, make post request
  useEffect(()=>{
    fetch("/api/messages", {method: "POST"}).then(response=>{
      response.json().then(data=>{
        // console.log(data)
        setMessages(data)
      }).catch(error=>{
        // console.log(error)
      })
    }).catch(error=>{
      // console.log(error)
    })
  }, []) 
  return(
    <div>
      <h1>About Component</h1>

      {messages && <ul>
        {messages.map((message, index)=><li key={`msg${index}`}>{message.title}</li>)}
      </ul>
        }
    </div>
  )
}

export default App;
