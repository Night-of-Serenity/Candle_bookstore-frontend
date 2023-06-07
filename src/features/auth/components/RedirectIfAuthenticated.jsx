import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}
