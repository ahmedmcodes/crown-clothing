import { useContext } from "react";
import { productsContext } from "../../../Contexts/Products.context";
import ProductCard from "../Product-Card/Product-card.component";
import { Link } from "react-router-dom";

const Shop = () => {
  const { products } = useContext(productsContext);

  const obj = Object.entries(products).map((item) => {
    return item;
  });
  // const obj2 = Object.keys(products).map((title) => {
  //   console.log(products.backpacks);
  // });
  // console.log(obj2);
  return (
    <>
      {obj.map((item) => {
        const categoryName = item[0];
        const categoryProducts = item[1];
        return (
          <>
            <Link to={`${categoryName}`} className="capitalize">
              {categoryName}
            </Link>
            <div
              key={categoryName}
              className="grid grid-cols-4-repeat gap-y-10 p-4 gap-x-10 mx-60"
            >
              {categoryProducts
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })
                .slice(0, 4)}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Shop;
