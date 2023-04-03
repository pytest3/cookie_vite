import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import AboutUs, { loader as aboutPageLoader } from "./pages/AboutUsPage";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import BonusJoke from "./pages/BonusJoke";
import ProductDetails from "./pages/ProducetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <Products /> },
      { path: "product-details/:productId", element: <ProductDetails /> },
      {
        path: "about",
        loader: aboutPageLoader,
        id: "about-loader",
        children: [
          { index: true, element: <AboutUs /> },
          { path: "bonus", element: <BonusJoke /> },
        ],
      },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}

export default App;
