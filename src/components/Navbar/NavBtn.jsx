/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function NavBtn({ children, isActive, to: path }) {
  return (
    <li>
      <Link
        to={path}
        className={
          isActive ? "text-mainyellow hover:text-mainyellow" : "text-white"
        }
      >
        {children}
      </Link>
    </li>
  );
}
