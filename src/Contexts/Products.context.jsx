import { createContext, useState } from "react";
import PRODUCTS from "/src/Utils/Firebase/products.json";

//Creating Products Context for the Components nested inside the App component to use
export const productsContext = createContext();

//Creating Context Provider to Wrap the enitre app
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
};
