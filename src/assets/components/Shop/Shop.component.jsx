import { useContext } from "react";
import { productsContext } from "../../../Contexts/Products.context";
import ProductCard from "../Product-Card/Product-card.component";

const Shop = () => {
  const { products } = useContext(productsContext);
  console.log(products);

  const obj = Object.entries(products).map((item, index) => {
    return item;
  });

  return (
    <div className="grid grid-cols-4-repeat gap-y-10 p-4 gap-x-10 mx-60">
      {obj.map((item) => {
        return (
          <>
            <div>{item[0]}</div>

            {item[1]
              .map((product) => {
                return <ProductCard key={item.id} product={product} />;
              })
              .slice(0, 4)}
          </>
        );
      })}
    </div>
  );
};

export default Shop;
