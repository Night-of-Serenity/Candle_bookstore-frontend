import { Link } from "react-router-dom";
import { AccordiionIcon } from "../icons";

export default function SidebarAccordionBtn({ children }) {
  return (
    <li>
      <details className="group ">
        <summary className="flex items-center justify-between px-4 py-2 text-white group hover:bg-mainsmdarkblue hover:text-gray-200">
          <span className="text-sm font-medium"> Genres </span>
          <AccordiionIcon />
        </summary>
        <ul className="mt-2 space-y-1 ">
          {children.map((genre) => (
            <li key={genre.id}>
              <Link
                href=""
                className="block py-2 py-4 pl-8 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              >
                {genre.title}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}
