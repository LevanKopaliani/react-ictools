import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";

const Applayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ],
  { basename: "/react-ictools/" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
