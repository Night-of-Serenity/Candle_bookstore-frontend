import Avatar from "../../../components/Avatar";
import { useLocation } from "react-router-dom";
import Usermenu from "./Usermenu";
import NavBtn from "./NavBtn";

export default function AdminNav() {
  const currentRoute = useLocation().pathname;

  return (
    <ul className="flex items-center px-1 menu menu-horizontal">
      <NavBtn
        isActive={currentRoute === "/" || currentRoute.startsWith("/books")}
        to={"/"}
      >
        <span>Store</span>
      </NavBtn>
      <NavBtn isActive={currentRoute.startsWith("/orders")} to={"/orders"}>
        <span>Orders</span>
      </NavBtn>

      <li>
        <Usermenu />
      </li>
      <li>
        <div className="w-50">
          <Avatar />
        </div>
      </li>
    </ul>
  );
}
