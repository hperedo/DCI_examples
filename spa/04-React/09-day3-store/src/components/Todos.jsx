
import { useEffect, useRef } from 'react'
import { Form, FormControl ,Button} from 'react-bootstrap/'
import List from './List'
import './Todos.scss'

import { useContext } from 'react'
import { TodosContext } from '../TodosContext'
import { v4 as uuidv4 } from 'uuid';
const Todos = () => {

    const id = uuidv4()
    console.log(id);
const inputValue = useRef()

const {tasks,setTasks} = useContext(TodosContext)





const submitHandler = (e)=>{
e.preventDefault()

setTasks([{id,text:inputValue.current.value} , ...tasks ]);
inputValue.current.value =''
}

  return (
    <Form  onSubmit={submitHandler} className='todos'>
        <h3>here are your tasks for today!</h3>
    <FormControl  ref={inputValue} className='inputTodo' type='text' required/>  
      
    <Button type='submit' className='addBtn' variant="success">Add</Button>
    <Button className='backBtn' variant="info">go back</Button>
    <List/>
    </Form>
  )
}

export default Todos