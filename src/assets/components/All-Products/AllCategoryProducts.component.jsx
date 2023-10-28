import { useParams } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../../../Contexts/Products.context";
import ProductCard from "../Product-Card/Product-card.component";

const AllCategoryProducts = () => {
  const params = useParams();
  const { id } = params;
  const { products } = useContext(productsContext);

  return (
    <>
      <h2 className="capitalize text-center text-3xl">{id}</h2>
      <div className="grid grid-cols-4-repeat gap-y-10 p-4 gap-x-10 mx-60">
        {products[id].map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
    </>
  );
};

export default AllCategoryProducts;
