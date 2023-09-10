import { Link } from "react-router-dom";
import "./NavBar.styles.scss";
import Crown from "../../../src/crown.svg";

const NavBar = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="logo-container">
        <img src={Crown} alt="logo" />
      </Link>
      <ul className="nav-links-container">
        <li>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
