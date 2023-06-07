import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const adminRoutes = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <div className="min-h-[100vh]">
          <Outlet />
        </div>
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <div>stock management page</div>,
      },
      {
        path: "/:bookid",
        element: <Outlet />,
        children: [
          { path: "/", element: <div>book detail</div> },
          { path: "/editbook", element: <div>edit book page</div> },
        ],
      },
      { path: "/addbook", element: <div>add book page</div> },
      {
        path: "/orders",
        element: <Outlet />,
        children: [
          { path: "/", element: <div>orders list page</div> },
          { path: "/:orderid", element: <div>order details</div> },
          {
            path: "/user/:userid",
            element: <div> user profile page</div>,
          },
        ],
      },
    ],
  },
];

export default adminRoutes;
