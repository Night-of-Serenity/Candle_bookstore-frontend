import { Link, useLocation } from "react-router-dom";
export default function SidebarCommonBtn({ to, title }) {
  const currentRoute = useLocation().pathname;
  const className =
    currentRoute === to
      ? "block px-4 py-2 text-sm font-medium text-mainyellow bg-mainlightblue hover:bg-mainsmdarkblue hover:text-gray-200"
      : "block px-4 py-2 text-sm font-medium text-white bg-mainlightblue hover:bg-mainsmdarkblue hover:text-gray-200";
  return (
    <li>
      <Link to={to} className={className}>
        {title}
      </Link>
    </li>
  );
}
