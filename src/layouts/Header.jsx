import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { BookIcon } from "../icons";
import useAuth from "../hooks/useAuth";
import AdminNav from "../features/auth/components/AdminNav";
import UserNav from "../features/auth/components/UserNav";
import GuestNav from "../features/auth/components/GuestNav";

export default function Header() {
  const { isAdmin, isAuthUser } = useAuth();

  return (
    <div className="py-2 text-white navbar navbar-center bg-maindarkblue">
      <div className="flex-1">
        <Link to="/" className="text-3xl normal-case btn btn-ghost">
          <BookIcon />
          <span className="text-coreyellow">CANDLE</span>
        </Link>
        <div className="flex-1">
          <Searchbar />
        </div>
      </div>
      <div className="flex-none ml-15">
        {isAdmin ? <AdminNav /> : isAuthUser ? <UserNav /> : <GuestNav />}
      </div>
    </div>
  );
}
