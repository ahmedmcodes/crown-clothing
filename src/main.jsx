import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./Contexts/user.context.jsx";
import { ProductsContextProvider } from "./Contexts/Products.context.jsx";
import { CartContextProvider } from "./Contexts/Cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
