import { Link, useLocation } from "react-router-dom";
import SidebarAccordionBtn from "./SidebarAccordionBtn";
import SidebarCommonBtn from "./SidebarCommonBtn";
import { useSelector } from "react-redux";

export default function SidebarMenu() {
  const genres = useSelector((state) => state.book.genresList);
  const currentRoute = useLocation().pathname;
  // console.log(currentRoute);
  const genreClass = (genreId) => {
    return currentRoute === `/filter/genres/${genreId}`
      ? "block py-2 pl-8 text-sm font-medium text-mainyellow hover:bg-gray-800 hover:text-mainyellow"
      : "block py-2 pl-8 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-200";
  };
  return (
    <ul className="mt-10 space-y-1">
      <SidebarCommonBtn to="/filter/bestseller" title="Bestseller" />
      <SidebarCommonBtn to="/filter/promotions" title="Promotions" />
      <SidebarCommonBtn to="/filter/all" title="All" />
      <SidebarAccordionBtn>
        {genres.map((genre) => (
          <li key={genre.id}>
            <Link
              to={`/filter/genres/${genre.id}`}
              className={genreClass(genre.id)}
            >
              {genre.genre}
            </Link>
          </li>
        ))}
      </SidebarAccordionBtn>
    </ul>
  );
}
