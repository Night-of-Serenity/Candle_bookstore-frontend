import { createBrowserRouter, RouterProvider } from "react-router-dom";
import adminRoutes from "./adminRoutes";
import publicRoutes from "./publicRoutes";

export default function Router() {
  const isAdmin = false;
  const appRoutes = isAdmin ? adminRoutes : publicRoutes;
  const router = createBrowserRouter(appRoutes);

  return <RouterProvider router={router} />;
}
