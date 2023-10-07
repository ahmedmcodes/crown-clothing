import { NavLink, Link } from "react-router-dom";
// import "./NavBar.styles.scss";

const NavBar = () => {
  return (
    <nav className="flex justify-between px-44 py-6 items-center  ">
      <div className="flex ">
        <Link to="/">
          <p className="font-righteous text-xl">
            GENTLEMEN'S <br />
            EMPORIUM
          </p>
        </Link>
        <ul className="flex flex-row items-center px-6">
          <li className="px-2 hover:underline">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="px-2 hover:underline">
            <NavLink to="/contact ">Contact</NavLink>
          </li>
        </ul>
      </div>
      <ul>
        <li className="hover:underline">
          <Link to="/sign-in">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
