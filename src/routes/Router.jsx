import { createBrowserRouter, RouterProvider } from "react-router-dom";
import adminRoutes from "./adminRoutes";
import publicRoutes from "./publicRoutes";
import authUserRoutes from "./authUserRoutes";
import { useSelector } from "react-redux";

export default function Router() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const isAdmin = useSelector((state) => state.auth.isAdmin);

  if (isAdmin && !isAuthenticated) {
    console.log("error authenticate and admin condition routing state");
    return;
  }

  const appRoutes = isAdmin
    ? adminRoutes
    : isAuthenticated
    ? authUserRoutes
    : publicRoutes;

  const router = createBrowserRouter(appRoutes);

  return <RouterProvider router={router} />;
}
