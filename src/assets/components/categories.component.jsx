import "./categories.styles.scss";

const Categories = () => {
  const data = [
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
      {data.map(({ title, id, img }) => {
        return (
          <div key={id} className="category-container">
            <div
              className="background-image"
              style={{
                backgroundImage: ` url(${img}) `,
              }}
            />
            <div className="category-content">
              <h2>{title}</h2>
              <p>Show Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
