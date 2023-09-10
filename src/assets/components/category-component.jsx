import "./category.styles.scss";

const Category = ({ category }) => {
  const { title, img } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: ` url(${img}) `,
        }}
      />
      <div className="category-content">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Category;
