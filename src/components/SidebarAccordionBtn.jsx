/* eslint-disable react/prop-types */
import { AccordiionIcon } from "../icons";
import { useLocation } from "react-router-dom";

export default function SidebarAccordionBtn({ children }) {
  const currentRoute = useLocation().pathname;
  const className = currentRoute.startsWith("/filter/genres")
    ? "flex items-center justify-between px-4 py-2 text-mainyellow group hover:bg-mainsmdarkblue hover:text-"
    : "flex items-center justify-between px-4 py-2 text-white group hover:bg-mainsmdarkblue hover:text-gray-200";
  return (
    <li>
      <details className="group ">
        <summary className={className}>
          <span className="text-sm font-medium"> Genres </span>
          <AccordiionIcon />
        </summary>
        <ul className="mt-2 space-y-1 ">{children}</ul>
      </details>
    </li>
  );
}
