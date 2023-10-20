import { useContext } from "react";
import { cartContext } from "../../../Contexts/Cart.context";
import { userContext } from "../../../Contexts/user.context";
import { Link } from "react-router-dom";
import CheckOutItem from "./CheckOutItem.component";

const CheckOut = () => {
  const { cartItems } = useContext(cartContext);
  const { currentUser } = useContext(userContext);

  //   if (!currentUser) {
  //     return <h1>Please log in</h1>;
  //   }
  return (
    <div className="mx-60 p-4">
      <div className="flex flex-row justify-between p-16 ">
        <p className="text-3xl">Your cart</p>
        <Link to="/shop" className="underline my-auto">
          Continue Shopping
        </Link>
      </div>
      {cartItems.map((item, index) => {
        return <CheckOutItem key={item.id} item={item} index={index} />;
      })}
    </div>
  );
};

export default CheckOut;
