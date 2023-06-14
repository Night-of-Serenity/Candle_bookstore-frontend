/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
export default function SidebarCommonBtn({ to: path, title, onClick }) {
  const currentRoute = useLocation().pathname;
  const className =
    currentRoute === path
      ? "block px-4 py-2 text-sm font-medium text-mainyellow bg-mainlightblue hover:bg-mainsmdarkblue hover:text-mainyellow"
      : "block px-4 py-2 text-sm font-medium text-white bg-mainlightblue hover:bg-mainsmdarkblue hover:text-gray-200";
  return (
    <li onClick={onClick}>
      <Link to={path} className={className}>
        {title}
      </Link>
    </li>
  );
}
