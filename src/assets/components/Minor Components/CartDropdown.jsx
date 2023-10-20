import Button from "../Minor Components/Button.component";
import CartItems from "./CartItems.component";
import { cartContext } from "../../../Contexts/Cart.context";
import { useContext } from "react";

const CartDropdown = () => {
  //Using Context to get the current Items in Context
  const { cartItems } = useContext(cartContext);

  //Calculating total cost of items added into cart
  const totalCost = cartItems
    .reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
    .toFixed(2);

  return (
    <div className=" h-80 border-4 border-black w-60 ml-auto mx-60 absolute flex flex-col top-25 z-10 left-3/4 bg-white p-2">
      <CartItems />
      <p>Total Amount: ${totalCost}</p>
      <div className=" mt-auto mx-auto">
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
