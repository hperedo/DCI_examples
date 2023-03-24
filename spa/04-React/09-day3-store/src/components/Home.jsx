import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <div>

        <h1>welcome to CRUD App </h1>
        <p>what are ur tasks today to do u can checkk them here </p>
    <NavLink to='todos' >    <Button variant="dark">go to Tasks</Button></NavLink>
    </div>
  )
}

export default Home