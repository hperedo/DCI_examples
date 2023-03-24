import "./ChildA.css"

import {Link} from 'react-router-dom'

const ChildA = props=>{
    console.log(props)
    return(
        <div className="ChildA">
            <h2>ChildA Component</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti veniam natus iste. Cupiditate incidunt reiciendis in maiores hic quam repudiandae rerum laborum assumenda ipsum numquam minima, nostrum, pariatur deleniti voluptatum.</p>
            <p>
                {/* <a href="/childb">Vist Child B</a> */}
                <Link to="/childb">Visit Child B</Link>
            </p>
        </div>
    )
}

export default ChildA;