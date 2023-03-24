import "./ChildB.css"
import {Link} from 'react-router-dom'
const ChildB = props=>{
    return(
        <div className="ChildB">
            <h2>ChildB Component</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sint ex veniam impedit unde, laborum dolorum voluptatum est mollitia corrupti, dolorem quam corporis eos, ipsa eius suscipit nostrum placeat sit.</p>
            <p>
            <Link to="/childa">Visit Child A</Link>
            </p>
        </div>
    )
}

export default ChildB;