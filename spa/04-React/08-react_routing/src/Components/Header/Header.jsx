import "./Header.css"
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li>
            <Link to="/childa">ChildA</Link>
          </li>
          <li>
            <Link to="/childb">ChildB</Link>
          </li>
          <li>
            <Link to="/childc">ChildC</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Header;
