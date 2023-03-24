import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import { useState, useContext } from 'react';
import {DataCenter} from './DataProvider'
import A from './Components/A/A'
import B from './Components/B/B'

function App(props) {
  // console.log("App Props:" , props)
  const [textFromChild, setTextFromChild] = useState("");
  // const [aColor, setAColor] = useState("white")
  // const changeText = t=>{
  //   setTextFromChild(t)
  // }
  const {dark} = useContext(DataCenter) 

  return (
    <Container className="App" style={{background: dark?"#2e2e2e": "#e2e2e2", color: dark?"#e2e2e2":"#2e2e2e"}}>
    <BrowserRouter>
    <div >
      <h1>My App</h1>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/de" element={<div>Hallo</div>}/>
        <Route path="/sp" element={<div>Hola</div>}/>
        <Route path="*" element={<div>Not Found</div>}/>
      </Routes>
    </div>
    </BrowserRouter>
    <Row>
      <Col xl="4">
        <A title="A Component" change={setTextFromChild}  />
      </Col>
      {/* <Col>
        <A title="A Component One More Time" change={changeText} z="10" e="o" />
      </Col> */}
      <Col xl="8">
        <B text={textFromChild} />
      </Col>
    </Row>
    <Row>
      <Col xl="6" >
        <p>{textFromChild}</p>
      </Col>
    </Row>
    </Container>
  );
}

export default App;
