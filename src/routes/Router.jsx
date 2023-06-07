import { createBrowserRouter, RouterProvider } from "react-router-dom";
import adminRoutes from "./adminRoutes";
import publicRoutes from "./publicRoutes";
import authUserRoutes from "./authUserRoutes";

export default function Router() {
  const isAdmin = false;
  const isAuthUser = false;

  const appRoutes = isAdmin
    ? adminRoutes
    : isAuthUser
    ? authUserRoutes
    : publicRoutes;
  const router = createBrowserRouter(appRoutes);

  return <RouterProvider router={router} />;
}
