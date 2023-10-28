const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${
        buttonType === "google"
          ? "bg-blue-500"
          : buttonType === "add-to-cart"
          ? "bg-transparent	 text-black border-2 border-black  w-full "
          : "bg-black"
      } text-white text-sm  mt-4 py-3 px-8 m-auto `}
      {...otherProps}
    >
      {children}
    </button>
  );
};
//w-fit hover:scale-105 hover:shadow-sm hover:shadow-black

export default Button;
