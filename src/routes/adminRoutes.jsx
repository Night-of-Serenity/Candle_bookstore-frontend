import { Outlet, Navigate } from "react-router-dom";
import Container from "../layouts/Container";
import StoremanagementPage from "../pages/StoremanagementPage";
import OrdersmanagementPage from "../pages/OrdersmanagementPage";
import AddBookPage from "../pages/AddBookPage";
const adminRoutes = [
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
        element: <StoremanagementPage />,
      },
      {
        path: "/books/bookdetail/:bookid",
        element: <Outlet />,
        children: [
          { path: "", element: <div>book detail</div> },
          { path: "editbook", element: <div>edit book page</div> },
        ],
      },
      { path: "/books/addbook", element: <AddBookPage /> },
      {
        path: "orders",
        element: <Outlet />,
        children: [
          { path: "", element: <OrdersmanagementPage /> },
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
