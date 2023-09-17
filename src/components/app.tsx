import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantDetail from "./RestaurantDetail";
// import Cart from "./Cart";
import { Provider } from "react-redux";
import store from "../utils/store";
import FoodCard from "./FoodCard";

import Cart1 from "./Cart1";
const AppLayout = () : JSX.Element => {
  return (
    <>
      <Provider store={store}>
         <Header />
        {/* <Body /> */}
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/restaurant/:id", element: <RestaurantDetail /> },
      { path: "/cart", element: <Cart1 /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={AppRouter} />);