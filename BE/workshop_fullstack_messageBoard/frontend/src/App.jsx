
import { useState } from 'react';
import './App.css';
import MessageBoard from './components/MessageBoard';
import Login from './components/Login';
import { UserMessageCTX } from './UserMessageCTX';
import { useContext } from 'react';
function App() {

const {token} = useContext(UserMessageCTX)

  return (
    <div className="App">
       <h1>welcome to message Board</h1>
       {token ? <MessageBoard  />:<Login />}
    </div>
  );
}

export default App;
