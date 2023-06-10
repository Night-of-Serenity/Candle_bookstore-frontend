import Avatar from "./Avatar";
import { useLocation } from "react-router-dom";
import NavBtn from "./NavBtn";

export default function GuestNav() {
  const currentRoute = useLocation().pathname;
  return (
    <ul className="flex items-center px-1 menu menu-horizontal">
      <NavBtn isActive={currentRoute === "/"} to="/">
        <span>Home</span>
      </NavBtn>
      <NavBtn isActive={currentRoute === "/login"} to="/login">
        <span>Sign in</span>
      </NavBtn>
      <NavBtn isActive={currentRoute === "/register"} to="/register">
        <span>Register</span>
      </NavBtn>
      <li className="cursor-none">
        <span>Guest</span>
      </li>
      <li>
        <div className="w-50">
          <Avatar />
        </div>
      </li>
    </ul>
  );
}
