const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <label className="mb-2" htmlFor="name">
        {label}
      </label>
      <input
        className=" border border-black py-2 mb-4 hover:border-2"
        {...otherProps}
      />
    </>
  );
};

export default FormInput;
