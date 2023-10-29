import { Outlet, Link } from "react-router-dom";
import Categories from "/src/assets/components/Categories/categories.component";
import Button from "../components/Minor Components/Button.component";
import { productsPreview } from "../../Utils/Firebase/productspreview";
import ProductCard from "../components/Product-Card/Product-card.component";
const Home = () => {
  return (
    <main className="bg-main h-80  bg-no-repeat ">
      {/*Upper Most section of the homepage */}
      <div className="flex flex-col h-80 items-center justify-center  text-white">
        <div className="">
          <h2 className="text-5xl py-1 text-bold">
            Industrial design m
            <span className="text-black text-bold">eets quality</span>
          </h2>
          <p className="py-4 text-xl text-center">
            World class tech acces<span className="text-black">sories</span>
          </p>
        </div>
        <div>
          <Link to="/shop">
            <Button buttonType="main-section-button">Shop Now</Button>
          </Link>
        </div>
      </div>
      <section>
        {/*Code for another tagline for the store on the homepage */}
        <div className="text-center py-8">
          <p className="text-3xl font-normal ">
            Tech That Transforms. Accessories That Matter.
          </p>
          <p className="py-6 underline">
            Tech accessories designed to enhance everyday life, one connection
            at a time.
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-4-repeat gap-y-10 p-4 gap-x-10 mx-60 content-center">
          {productsPreview.map((product) => {
            return (
              <ProductCard
                key={product.id}
                section="main-section"
                product={product}
              />
            );
          })}
          <Link to="shop" className="place-self-center">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
// <Categories />;

export default Home;
