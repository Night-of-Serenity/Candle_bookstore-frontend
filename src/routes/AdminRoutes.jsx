import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const router = createBrowserRouter([
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
]);

export default function AdminRoutes() {
  return <RouterProvider router={router} />;
}
