import { useContext } from "react";
import { cartContext } from "../../../Contexts/Cart.context";
import Button from "../Minor Components/Button.component";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(cartContext);

  const addProductToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      product.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      product.quantity = 1;
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <div className="flex flex-col text-xl ">
      <img className="rounded-xl " src={product.image} alt="img" />
      <div className="flex flex-row justify-between p-1 pt-2">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
      <Button buttonType="add-to-cart" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
