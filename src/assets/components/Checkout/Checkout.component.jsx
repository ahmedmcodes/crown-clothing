import { useContext } from "react";
import { cartContext } from "../../../Contexts/Cart.context";
import { userContext } from "../../../Contexts/user.context";
import { Link } from "react-router-dom";
import CheckOutItem from "./CheckOutItem.component";
import Button from "../Minor Components/Button.component";

const CheckOut = () => {
  const { cartItems } = useContext(cartContext);
  const { currentUser } = useContext(userContext);

  //Function to calculate total cost on Checkout page
  const totalCost = cartItems
    .reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
    .toFixed(2);

  return (
    <div className="mx-60 p-4">
      <div className="flex flex-row justify-between p-16 ">
        <p className="text-3xl">Your cart</p>
        <Link to="/shop" className="underline my-auto">
          Continue Shopping
        </Link>
      </div>
      {cartItems.length > 0 ? null : <div>Your Cart is Empty</div>}
      {cartItems.map((item, index) => {
        return <CheckOutItem key={item.id} item={item} index={index} />;
      })}
      {totalCost > 0 ? (
        <div className="p-4 flex flex-col">
          <p className="ml-auto py-2">Subtotal: ${totalCost}</p>
          <p className="ml-auto py-2">
            Taxes and shipping calculated at checkout
          </p>
          <span className="ml-auto">
            <Button>Checkout</Button>
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default CheckOut;
