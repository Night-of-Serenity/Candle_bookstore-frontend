import { useSelector } from "react-redux";

export default function useAuth() {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const isAuthUser = useSelector((state) => state.auth.isAuthenticated);

  if (isAdmin && !isAuthUser) {
    throw new Error("authenticate states of appliication error");
  }

  return { isAdmin, isAuthUser };
}
