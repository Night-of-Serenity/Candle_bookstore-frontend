import { Navigate } from "react-router-dom";
import Homepage from "../pages/Homepage";
// import ProtectedRoute from "../features/auth/components/ProtectedRoute";
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
        path: "/bestseller",
        element: <div>Bestseller</div>,
      },
      {
        path: "/promotions",
        element: <div>Promotions</div>,
      },
      { path: "/all", element: <div>All</div> },
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
