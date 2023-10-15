const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col text-md">
      <img
        className="rounded-xl "
        src={product.image}
        alt="img"
        width="300px"
        height="300px"
      />
      <h1 className="p-1 pt-2 ">{product.name}</h1>
      <p className="p-1">${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
