import { Outlet, Link } from "react-router-dom";
import Categories from "/src/assets/components/Categories/categories.component";
import Button from "../components/Minor Components/Button.component";
import { productsPreview } from "../../Utils/Firebase/productspreview";
import ProductCard from "../components/Product-Card/Product-card.component";
import FormInput from "../components/Minor Components/FormInput.component";
const Home = () => {
  return (
    <main className="bg-main h-80  bg-no-repeat ">
      {/*Upper Most section of the homepage */}
      <div className="flex flex-col h-80 items-center justify-center  text-white">
        <div className="">
          <h2 className="text-6xl py-1 text-[#808080] font-thin ">
            Industrial design meets quality
          </h2>
          <p className="py-4 text-2xl text-center text-[#808080]">
            World class tech accessories
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
      <section className="mx-60 py-10">
        <h2 className="text-3xl py-5 text-center">Newly Launched!</h2>
        <div className="grid grid-cols-2-repeat gap-y-10 p-4 gap-x-10">
          <div className="">
            <ProductCard product={productsPreview[6]} />
          </div>
          <div>
            <ProductCard product={productsPreview[2]} />
          </div>
          <div>
            <ProductCard product={productsPreview[4]} />
          </div>
        </div>
      </section>
      <footer className="border-t-2">
        <div className="text-center py-10">
          <h2 className="text-4xl py-2 font-righteous">Electra</h2>
          <p className="text-xl py-2">
            A brand that strives to inspire and push creative culture forward.
          </p>
          <p className="text-lg py-4 w-2/4 m-auto">
            We approach our work with the mentality that every product made is a
            learning experience to improve our craft. We are practitioners and
            purveyors of creative culture and are inspired by its various forms
            from art, design, fashion, music, film, food, and more.
          </p>
          <div className="pt-5 ">
            <p className="py-2 text-md">Subscribe to our emails</p>
            <FormInput placeholder="Email" />
          </div>
        </div>
      </footer>
    </main>
  );
};
// <Categories />;

export default Home;
