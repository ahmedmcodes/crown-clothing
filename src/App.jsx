import { Route, Routes } from "react-router-dom";
import Home from "./assets/routes/home.component";
import Navigation from "./assets/routes/NavBar.component";
import SignIn from "./assets/components/SignIn/SignIn.component";

const Shop = () => {
  return <h1>I am shop component</h1>;
};
const Contact = () => {
  return <h1>I am contact component</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
