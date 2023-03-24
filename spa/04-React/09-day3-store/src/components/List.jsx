import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './List.scss'
import { useContext } from 'react';
import { TodosContext } from '../TodosContext';
const List = () => {

const {tasks,setTasks} = useContext(TodosContext)
console.log(tasks);



const deleteHndler =(todoThatWECliked)=>{




  const filterdTasks = tasks.filter(item => item.id !==todoThatWECliked.id)
     
setTasks(filterdTasks)
}


  return (
    <ListGroup className='list'>



  {tasks && tasks.map(item => <ListGroup.Item key={item.id} className='listItem' variant="primary">
        <p>{item.text}</p>
        <div>
           <Button variant="secondary">Edit</Button>
           <Button onClick={()=> deleteHndler(item)} variant="danger">Delete</Button>
        </div>
   
    </ListGroup.Item> )}
   

    </ListGroup>
  )
}

export default List