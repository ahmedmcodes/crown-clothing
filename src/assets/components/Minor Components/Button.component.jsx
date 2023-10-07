const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${
        buttonType === "google" ? "bg-blue-500" : "bg-black"
      } text-white w-fit mt-4 py-3 px-8 m-auto hover:scale-105 hover:shadow-sm hover:shadow-black`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
