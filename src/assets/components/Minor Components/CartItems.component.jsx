import { useContext } from "react";
import { cartContext } from "../../../Contexts/Cart.context";

const CartItems = () => {
  const { cartItems } = useContext(cartContext);

  return (
    <div className="overflow-y-auto">
      {cartItems.map((item) => {
        return (
          <div className="flex flex-row h-15 pb-1 " key={item.id}>
            <img src={item.image} alt="img" width="60px" height="30px" />
            <div>
              <h1 className="p-1 pt-2 ">{item.name}</h1>
              <p className="p-1">
                {item.quantity} x ${item.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
