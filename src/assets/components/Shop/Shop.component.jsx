import { useContext } from "react";
import { productsContext } from "../../../Contexts/Products.context";
import ProductCard from "../Product-Card/Product-card.component";

const Shop = () => {
  const { products } = useContext(productsContext);

  return (
    <div className="grid grid-cols-4-repeat gap-y-10 p-4 gap-x-10 mx-60">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
