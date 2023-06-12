import { Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import FilterPage from "../pages/FilterPage";
import Container from "../layouts/Container";
import BookDetailPage from "../pages/BookDetailPage";
const authUserRoutes = [
  {
    path: "/",
    element: (
      <>
        <Container />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/filter/bestseller",
        element: <FilterPage pageTitle="bestseller" />,
      },
      {
        path: "/filter/promotions",
        element: <FilterPage pageTitle="promotions" />,
      },
      { path: "/filter/all", element: <FilterPage pageTitle="all" /> },
      {
        path: "/filter/search",
        element: <FilterPage pageTitle="search" />,
      },
      {
        path: "/filter/author",
        element: <FilterPage pageTitle="author" />,
      },
      {
        path: "/filter/genres/:genreId",
        element: <FilterPage pageTitle="genres" />,
      },
      {
        path: "/books/bookdetail/:bookid",
        element: <BookDetailPage />,
      },

      {
        path: "/purschasedHistory",
        element: <div>purschased history</div>,
      },
      {
        path: "/cart",
        element: <div>cart</div>,
      },
      {
        path: "/checkout",
        element: <div>checkout</div>,
      },
      {
        path: "/profile",
        element: <div>user profile</div>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default authUserRoutes;
