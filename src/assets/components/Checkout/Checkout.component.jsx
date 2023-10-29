import { useContext } from "react";
import { cartContext } from "../../../Contexts/Cart.context";
import { userContext } from "../../../Contexts/user.context";
import { Link } from "react-router-dom";
import CheckOutItem from "./CheckOutItem.component";
import Button from "../Minor Components/Button.component";

const CheckOut = () => {
  const { cartItems } = useContext(cartContext);
  const { currentUser } = useContext(userContext);

  //
  let firstName;
  if (currentUser) {
    if (currentUser.displayName !== null) {
      firstName = currentUser.displayName.split(" ")[0];
    }
  }

  //Function to calculate total cost on Checkout page
  const totalCost = cartItems
    .reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
    .toFixed(2);

  return (
    <div className="mx-60 p-4">
      {/*Upper section of Checkout which is always same */}
      <div className="flex flex-row justify-between p-16 ">
        {firstName ? (
          <p className="text-3xl">{firstName}'s Cart</p>
        ) : (
          <p className="text-3xl">Your Cart</p>
        )}

        <Link to="/shop" className="underline my-auto">
          Continue Shopping
        </Link>
      </div>

      {/*Conditional Code that executes when there are no items in cart */}
      {cartItems.length > 0 ? null : (
        <div className=" text-center">
          <p className="text-3xl pb-5">Your Cart is Empty</p>
          <Link to="/shop">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      )}

      {/*Code for showing all the items in the cart */}
      {cartItems.map((item, index) => {
        return <CheckOutItem key={item.id} item={item} index={index} />;
      })}

      {/*Code which shows the total cost of items in the cart */}

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
