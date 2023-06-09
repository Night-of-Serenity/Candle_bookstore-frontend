import { Link } from "react-router-dom";
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

  return (
    <div className="navbar navbar-center bg-maindarkblue text-white py-5">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          <BookIcon />
          <span className="text-coreyellow">CANDLE</span>
        </Link>
        <div className="flex-1">
          <Searchbar />
        </div>
      </div>
      <div className="flex-none ml-15">
        <ul className="menu menu-horizontal px-1 flex items-center">
          {isAdmin ? (
            <>
              <li>
                <Link to="/">Store Management</Link>
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
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
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
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
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
