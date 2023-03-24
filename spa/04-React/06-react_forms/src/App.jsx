import React from 'react'
import Register from './components/Register'

function App(props){
    
    return (
        <>
        <h1>App Component</h1>
        <p>{props.hola}</p>
        <Register />

        </>
    )
}

export default App