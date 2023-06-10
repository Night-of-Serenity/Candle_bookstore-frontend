import { Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/Container";

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
        element: <div>Bestseller</div>,
      },
      {
        path: "/filter/promotions",
        element: <div>Promotions</div>,
      },
      { path: "/filter/all", element: <div>All</div> },
      {
        path: "/filter/search",
        element: <div>Search</div>,
      },
      {
        path: "/filter/author",
        element: <div>Author</div>,
      },
      {
        path: "/filter/genres/:genreId",
        element: <div>Genre</div>,
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
