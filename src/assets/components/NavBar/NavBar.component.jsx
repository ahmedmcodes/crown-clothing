import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../../Contexts/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../../Utils/Firebase/firebase.utils";
import EmailNotVerified from "../Minor Components/EmailNotVerified.component";
import { BsCart2 } from "react-icons/bs";
import CartDropdown from "../Minor Components/CartDropdown";
import { cartContext } from "../../../Contexts/Cart.context";

const NavBar = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpen, setIsCartOpen } = useContext(cartContext);

  //Signs out from the app when the button is clicked
  const handleSignOutButtonOnClick = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
        <ul className="flex flex-row">
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
          <li className="pl-4 m-auto text-xl hover:cursor-pointer">
            <BsCart2 onClick={() => setIsCartOpen(!isCartOpen)} />
          </li>
        </ul>
      </nav>

      {isCartOpen && <CartDropdown />}
      {currentUser ? <EmailNotVerified currentUser={currentUser} /> : null}
    </>
  );
};

export default NavBar;
