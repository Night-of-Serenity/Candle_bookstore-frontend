import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Homepage from "../pages/Homepage";
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import HomeRoutes from "./HomeRoutes";
// import AdminRoutes from "./AdminRoutes";
// import HomeRoutes from "./HomeRoutes";
// import AuthUserRoutes from "./AuthUserRoutes";
// import Sidebar from "../layouts/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col">
        <div>
          <Headers />
        </div>
        <div className="flex-1 min-h-[100vh]">
          <Outlet />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            {/* <Sidebar /> */}
            {/* <HomeRoutes /> */}
            {/* <Outlet /> */}
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
          {
            path: "/:bookid",
          },
        ],
      },
      {
        path: "/authuser",
        element: (
          // <AuthUserRoutes />
          <Outlet />
        ),
        children: [
          {
            path: "",
            element: <div>profile page</div>,
          },
          {
            path: "orderslist",
            element: <div>purchased history</div>,
          },
          {
            path: "cart",
            element: <div>cart page</div>,
          },
          {
            path: "checkout",
            element: <div>checkout page</div>,
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
      {
        path: "/admin",
        element: (
          // <AdminRoutes />
          <Outlet />
        ),
        children: [
          {
            path: "",
            element: <Outlet />,
            children: [
              { path: "", element: <div>stock management page</div> },
              {
                path: ":book_detail",
                element: <Outlet />,
                children: [
                  { path: "", element: <div>book detail</div> },
                  { path: "editbook", element: <div>edit book page</div> },
                ],
              },
              { path: "addbook", element: <div>add book page</div> },
            ],
          },
          {
            path: "orders",
            element: <Outlet />,
            children: [
              { path: "", element: <div>orders list page</div> },
              { path: "orders/:orderIs", element: <div>order details</div> },
              { path: "orders/:userid", element: <div>user detail</div> },
            ],
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
