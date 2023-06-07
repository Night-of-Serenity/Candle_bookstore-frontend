import { Outlet } from "react-router-dom";

export default function adminRoutes() {
  return [
    { path: "/", element: <div>stock management page</div> },
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
        { path: "/:userid", element: <div>user detail</div> },
      ],
    },
  ];
}
