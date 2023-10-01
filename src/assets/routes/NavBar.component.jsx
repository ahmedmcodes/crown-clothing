import { Outlet } from "react-router-dom";
import NavBar from "/src/assets/components/NavBar/NavBar.component";

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Navigation;
