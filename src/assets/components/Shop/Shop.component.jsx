import { useContext } from "react";
import { productsContext } from "../../../Contexts/Products.context";
import ProductCard from "../Product-Card/Product-card.component";
import { Link } from "react-router-dom";
import Button from "../Minor Components/Button.component";

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
            <Link className="py-2" to={`${categoryName}`}>
              <h2 className="capitalize text-center text-3xl py-4">
                {categoryName}
              </h2>
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
            {/*

              <div className="text-center">
                <Button>See More</Button>
              </div>
              */}
          </>
        );
      })}
    </>
  );
};

export default Shop;
