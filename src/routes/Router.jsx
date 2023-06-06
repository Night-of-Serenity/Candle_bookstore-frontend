import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
// import Sidebar from "../layouts/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Sidebar /> */}
        <Outlet />{" "}
      </>
    ),
    children: [
      { path: "/", element: <Homepage /> },
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
        path: "/genres/:genre",
        element: <div>Genre</div>,
      },
    ],
  },
  {
    path: "/cart",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <div>cart page</div>,
      },
      {
        path: "/checkout",
        element: <div>checkout page</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/userprofile",
    element: <div>profile page</div>,
  },
  {
    path: "/admin",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Outlet />,
        children: [
          { path: "/", element: <div>stock management page</div> },
          {
            path: "/:book_detail",
            element: <Outlet />,
            children: [
              { path: "/", element: <div>book detail</div> },
              { path: "/editbook", element: <div>edit book page</div> },
            ],
          },
          { path: "/addbook", element: <div>add book page</div> },
        ],
      },
      {
        path: "/orders",
        element: <Outlet />,
        children: [
          { path: "/", element: <div>orders list page</div> },
          { path: "/orders/:orderIs", element: <div>order details</div> },
          { path: "/orders/:userid", element: <div>user detail</div> },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
