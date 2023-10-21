import { useContext } from "react";
import { cartContext } from "../../../Contexts/Cart.context";
import { userContext } from "../../../Contexts/user.context";
import CartItems from "../Minor Components/CartItems.component";

const CheckOutItem = ({ item, index }) => {
  const { cartItems, setCartItems } = useContext(cartContext);
  const { currentUser } = useContext(userContext);

  //function to decrease the quantity of items
  const handleDecrementClick = () => {
    if (item.quantity > 0) {
      item.quantity -= 1;
    }
    setCartItems([...cartItems]);
  };

  //Function to increase the quantity of items
  const handleIncrementClick = () => {
    item.quantity += 1;

    setCartItems([...cartItems]);
  };

  //Function to delete an item on Checkout page
  const handleOnDeleteButton = () => {
    cartItems.splice(index, 1);
    setCartItems([...cartItems]);
    console.log(cartItems);
  };

  return (
    <>
      <div>
        {/*  first div*/}
        <div className="flex flex-row h-40 p-2 justify-between " key={item.id}>
          <img src={item.image} alt={item.name} className="w-1/4" />
          <div className="flex flex-col p-2">
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
          {/*  Second div*/}

          <div className="flex flex-row px-6 py-2 text-xl h-max border">
            <p
              onClick={handleDecrementClick}
              className="text-2xl pr-4 hover:cursor-pointer"
            >
              {"-"}
            </p>
            <p className="px-4 ">{item.quantity}</p>
            <p
              onClick={handleIncrementClick}
              className="text-2xl pl-4 hover:cursor-pointer"
            >
              {"+"}
            </p>
          </div>
          {/*  Third div*/}

          <div>
            <p>${(item.quantity * item.price).toFixed(2)} </p>
          </div>
          <button onClick={handleOnDeleteButton}>Delete</button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default CheckOutItem;
