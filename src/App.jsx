import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./assets/routes/home.component";
import Navigation from "./assets/routes/NavBar.component";
import SignIn from "./assets/components/SignIn/SignIn.component";
import SignUpForm from "./assets/components/Sign-up/Sign-up.component";

const Shop = () => {
  return <h1>I am shop component</h1>;
};
const Contact = () => {
  return <h1>I am contact component</h1>;
};

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUpForm />} />
      <Route path="shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
