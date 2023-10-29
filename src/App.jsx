import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./assets/routes/home.component";
import Navigation from "./assets/routes/NavBar.component";
import SignUpForm from "./assets/components/Sign-up/Sign-up.component";
import SignIn from "./assets/components/Sign-in/Sign-in.component";
import Shop from "./assets/components/Shop/Shop.component";
import CheckOut from "./assets/components/Checkout/Checkout.component";
import AllCategoryProducts from "./assets/components/All-Products/AllCategoryProducts.component";
import PageNotFound from "./assets/components/Page Not Found/PageNotFound.component";

const Contact = () => {
  return <h1>I am contact component</h1>;
};

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Navigation />}
      errorElement={<PageNotFound errorText="Something Went Wrong" />}
    >
      <Route index element={<Home />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUpForm />} />
      <Route path="shop" element={<Shop />} />
      <Route
        path="shop/:id"
        element={<AllCategoryProducts />}
        errorElement={<PageNotFound errorText="Something Went Wrong" />}
      />
      <Route path="contact" element={<Contact />} />
      <Route
        path="checkout"
        element={<CheckOut />}
        errorElement={<PageNotFound errorText="Something Went Wrong" />}
      />
      <Route path="*" element={<PageNotFound errorText="Page Not Found" />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
