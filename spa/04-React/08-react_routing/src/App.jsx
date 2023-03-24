import "./App.css"
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ChildA from "./Components/ChildA/ChildA"
import ChildB from './Components/ChildB/ChildB'
import NotFound from './Components/NotFound/NotFound'
import Header from "./Components/Header/Header"
import ChildC from './Components/ChildC/ChildC'

const App = props=>{
    return(
        <div className="App">
            <h1>App Component</h1>
            {/* ERROR, need to be inside  BrowserRouter*/}
            {/* <Link to="bla">Hi</Link> */}
            <BrowserRouter>
            {/* This area will be renderd anyway */}
            {/* Import navbar */}
            <Header />
                <Routes>
                    <Route path='/' element={<ChildA hi="hola" zo="lala" />} />
                    <Route path='/childa' element={<ChildA />} />
                    <Route path='/childb' element={<ChildB/>} />
                    <Route path='/jay' element={<ChildA/>} />
                    <Route exact path="/childc" element={<ChildC/>}></Route>

                    {/* All Other Cases (404) */}
                    {/* <Route path="/*" element={<NotExist color="red"/>} /> */}
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

// const NotExist = props=>{
//     return(
//         <div style={{color: props.color}}>
//             <h2>Not exist</h2>
//         </div>
        
//     )
// }


export default App