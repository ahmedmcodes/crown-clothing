const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col text-xl hover:cursor-pointer">
      <img className="rounded-xl " src={product.image} alt="img" />
      <h1 className="p-1 pt-2 ">{product.name}</h1>
      <p className="p-1">${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
