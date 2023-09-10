import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.component";

const Navigation = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Navigation;
