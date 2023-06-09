import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";

import Container from "../layouts/Container";
const authUserRoutes = [
  {
    path: "/",
    element: (
      <>
        <Header />
        AuthUser
        <Container />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/bestseller",
        element: <div>Bestseller</div>,
      },
      {
        path: "/promotions",
        element: <div>Promotions</div>,
      },
      {
        path: "/search",
        element: <div>Search</div>,
      },
      {
        path: "/author",
        element: <div>Author</div>,
      },
      {
        path: "/genres/",
        element: <div>Genre</div>,
      },
      {
        path: "/books/:bookid",
        element: <div>book detail</div>,
      },

      {
        path: "/orderslist",
        element: <div>purchased history</div>,
      },
      {
        path: "/cart",
        element: <div>cart page</div>,
      },
      {
        path: "/checkout",
        element: <div>checkout page</div>,
      },
      {
        path: "/profile",
        element: <div>user profile page</div>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default authUserRoutes;
