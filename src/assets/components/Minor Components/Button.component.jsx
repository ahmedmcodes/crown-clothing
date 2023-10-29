const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${
        buttonType === "google"
          ? "bg-blue-500 text-white"
          : buttonType === "add-to-cart"
          ? "bg-transparent text-black border-2 border-black  w-full "
          : buttonType === "main-section-button"
          ? "text-white border-2 border-white"
          : "bg-black text-white"
      }   mt-4 py-3 px-8 m-auto `}
      {...otherProps}
    >
      {children}
    </button>
  );
};
//w-fit hover:scale-105 hover:shadow-sm hover:shadow-black

export default Button;
