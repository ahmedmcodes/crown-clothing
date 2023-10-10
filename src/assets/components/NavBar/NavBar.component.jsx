import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../../Contexts/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../../Utils/Firebase/firebase.utils";

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  console.log(auth);
  const handleSignOutButtonOnClick = async () => {
    try {
      await signOut(auth);
      console.log(auth);
      setCurrentUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(currentUser);

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
          {currentUser ? (
            <button
              className="hover:cursor-pointer"
              onClick={handleSignOutButtonOnClick}
            >
              Sign out
            </button>
          ) : (
            <Link to="/sign-in">Sign in</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
