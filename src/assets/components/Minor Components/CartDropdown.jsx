import Button from "../Minor Components/Button.component";
const CartDropdown = () => {
  return (
    <div className=" h-80 border-4 border-black w-60 ml-auto mx-60 absolute flex flex-col top-25 z-10 left-3/4 bg-white p-2">
      <div />
      <div className=" mt-auto mx-auto">
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
