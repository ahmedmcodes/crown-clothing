import { createContext, useState } from "react";

//Creating Cart Context
export const cartContext = createContext();

//Creating Context Provider to Wrap the enitre app
export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <cartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </cartContext.Provider>
  );
};
