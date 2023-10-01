import "./categories.styles.scss";
import Category from "/src/assets/components/Category/category-component";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      img: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      img: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      img: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      img: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      img: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
