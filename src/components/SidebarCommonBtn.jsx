import { Link } from "react-router-dom";
export default function SidebarCommonBtn({ children }) {
  return (
    <li>
      <Link
        href=""
        className="block px-4 py-2 text-sm font-medium text-white bg-mainlightblue hover:bg-mainsmdarkblue hover:text-gray-200"
      >
        {children}
      </Link>
    </li>
  );
}
