import { Outlet } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

export default function publicRoutes() {
  return [
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
      path: "/:bookid",
    },
    {
      path: "/:authuserid",
      element: (
        <ProtectedRoute>
          <Outlet />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Homepage />,
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
        {
          path: "/profile",
          element: <div>user profile page</div>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ];
}
