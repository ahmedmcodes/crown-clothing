import { createContext, useState, useEffect } from "react";
import shopData from "/src/Utils/Firebase/products.js";
import { productCollectionRef, db } from "../Utils/Firebase/firebase.utils";
import { doc, writeBatch, getDocs } from "firebase/firestore";

//Creating Products Context for the Components nested inside the App component to use
export const productsContext = createContext();

//Code for adding all the products to firestore
// const addProductsToDb = async () => {
//   const batch = writeBatch(db);

//   shopData.map((product) => {
//     const docRef = doc(productCollectionRef, product.title.toLowerCase());
//     batch.set(docRef, product);
//   });
//   await batch.commit();
// };
// addProductsToDb();

//Creating Context Provider to Wrap the enitre app
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    //Getting products back from firestore
    const getAllProductsFromDb = async () => {
      const querySnapshot = await getDocs(productCollectionRef);
      const queryData = querySnapshot.docs;
      const shopData = queryData.reduce((acc, doc) => {
        const { title, items } = doc.data();
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
      setProducts(shopData);
    };
    getAllProductsFromDb();
  }, []);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
};
