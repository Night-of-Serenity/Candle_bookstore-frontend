import { Outlet, Navigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../layouts/Container";
const adminRoutes = [
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
        element: <div>stock management page</div>,
      },
      {
        path: "/book/:bookid",
        element: <Outlet />,
        children: [
          { path: "", element: <div>book detail</div> },
          { path: "editbook", element: <div>edit book page</div> },
        ],
      },
      { path: "addbook", element: <div>add book page</div> },
      {
        path: "orders",
        element: <Outlet />,
        children: [
          { path: "", element: <div>orders list page</div> },
          { path: ":orderid", element: <div>order details</div> },
          {
            path: "user/:userid",
            element: <div> user profile page</div>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default adminRoutes;
