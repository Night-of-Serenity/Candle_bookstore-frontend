import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";

export default function HomeRoutes() {
  const router = createBrowserRouter([
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
  ]);
  return <RouterProvider router={router} />;
}
