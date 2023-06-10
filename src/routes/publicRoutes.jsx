import { Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/Container";
import FilterPage from "../pages/FilterPage";
const publicRoutes = [
  {
    path: "/",
    element: (
      <>
        <Header />
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
        path: "/books/:bookId",
        element: <div>book detail</div>,
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
