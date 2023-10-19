import { createContext, useState } from "react";

export const cartItemsContext = createContext({});

export const CartItemsContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <cartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartItemsContext.Provider>
  );
};
