import { Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Container from "../layouts/Container";
import FilterPage from "../pages/FilterPage";
import BookDetailPage from "../pages/BookDetailPage";
const publicRoutes = [
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
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default publicRoutes;
