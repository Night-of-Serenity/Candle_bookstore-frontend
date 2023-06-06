import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AuthUserRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>profile page</div>,
    },
    {
      path: "/orderslist",
      element: <div>purchased history</div>,
    },
    {
      path: "/cart",
      element: <div>cart page</div>,
    },
    {
      path: "/checkout",
      element: <div>checkout page</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
