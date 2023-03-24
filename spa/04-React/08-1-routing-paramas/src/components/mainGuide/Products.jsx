
import { NavLink } from 'react-router-dom'
import data from '../../data.js'
import "./Products.scss"

const Products = () => {

    console.log(data)
  return (
    <div>

        <h1> Products will be here Soon... </h1>

        <ul>

            {data.map((item,i) => <li key={i} > <NavLink   to={item.id}>  {item.name}   </NavLink> </li>)}
        </ul>
    </div>
  )
}

export default Products