import { Link, useLocation } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { BookIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../store/slices/authSlice";
import useAuth from "../hooks/useAuth";
import Avatar from "../components/Avatar";
import Usermenu from "../features/auth/components/Usermenu";

export default function Header() {
  const dispatch = useDispatch();
  const { isAdmin, isAuthUser } = useAuth();
  const user = useSelector((state) => state.auth.user);
  const { pathname: currentRoute } = useLocation();

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
        <ul className="flex items-center px-1 menu menu-horizontal">
          {isAdmin ? (
            <>
              <li>
                <Link
                  to="/"
                  className={
                    currentRoute === "/" || currentRoute.startsWith("/books")
                      ? "text-mainyellow"
                      : "text-white"
                  }
                >
                  Store Management
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className={
                    currentRoute.startsWith("/orders")
                      ? "text-mainyellow"
                      : "text-white"
                  }
                >
                  Orders Management
                </Link>
              </li>
              <li>
                <Usermenu
                  isAdmin={isAdmin}
                  username={user.username}
                  onClickLogout={() => {
                    dispatch(logoutAsync());
                  }}
                />
              </li>
              <li>
                <div className="w-50">
                  <Avatar src={user.profileImage} />
                </div>
              </li>
            </>
          ) : isAuthUser ? (
            <>
              <li>
                <Link
                  to="/"
                  className={
                    currentRoute === "/" ? "text-mainyellow" : "text-white"
                  }
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className={
                    currentRoute === "/cart" ? "text-mainyellow" : "text-white"
                  }
                >
                  Cart
                </Link>
              </li>
              <li>
                <Usermenu
                  isAdmin={isAdmin}
                  username={user.username}
                  onClickLogout={() => {
                    dispatch(logoutAsync());
                  }}
                />
              </li>
              <li>
                <div className="w-50">
                  <Avatar src={user?.profileImage} />
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/"
                  className={
                    currentRoute === "/" ? "text-mainyellow" : "text-white"
                  }
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={
                    currentRoute === "/login" ? "text-mainyellow" : "text-white"
                  }
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={
                    currentRoute === "/register"
                      ? "text-mainyellow"
                      : "text-white"
                  }
                >
                  Register
                </Link>
              </li>
              <li>
                <span>Guest</span>
              </li>
              <li>
                <div className="w-50">
                  <Avatar src={user?.profileImage} />
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
