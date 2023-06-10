import { useSelector } from "react-redux";
import Avatar from "../../../components/Avatar";
import { useLocation } from "react-router-dom";
import Usermenu from "./Usermenu";
import NavBtn from "./NavBtn";
import { CartIcon } from "../../../icons";

export default function UserNav() {
  const currentRoute = useLocation().pathname;
  const { user } = useSelector((state) => state.auth);

  return (
    <ul className="flex items-center px-1 menu menu-horizontal">
      <NavBtn isActive={currentRoute === "/"} to="/">
        <span>Home</span>
      </NavBtn>

      <NavBtn isActive={currentRoute === "/cart"} to="/cart">
        <div className="flex items-center gap-2">
          <span>Cart</span>
          <span>
            <CartIcon
              className={
                currentRoute === "/cart" ? "fill-mainyellow" : "fill-white"
              }
            />
          </span>
        </div>
      </NavBtn>

      <li>
        <Usermenu />
      </li>
      <li>
        <div className="w-50">
          <Avatar src={user?.profileImage} />
        </div>
      </li>
    </ul>
  );
}
