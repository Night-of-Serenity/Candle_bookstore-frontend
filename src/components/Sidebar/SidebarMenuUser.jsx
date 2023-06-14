import { Link, useLocation } from "react-router-dom";
import SidebarAccordionBtn from "./SidebarAccordionBtn";
import SidebarCommonBtn from "./SidebarCommonBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllBookAsync,
  fetchBestsellerAsync,
  fetchPromotionsAsync,
  fetchBooksByGenreIdAsync,
} from "../../store/slices/bookslice";

export default function SidebarMenu() {
  const genres = useSelector((state) => state.book.genresList);
  const currentRoute = useLocation().pathname;
  // console.log(currentRoute);
  const genreClass = (genreId) => {
    return currentRoute === `/filter/genres/${genreId}`
      ? "block py-2 pl-8 text-sm font-medium text-mainyellow hover:bg-gray-800 hover:text-mainyellow"
      : "block py-2 pl-8 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-200";
  };

  const dispatch = useDispatch();

  return (
    <ul className="mt-10 space-y-1">
      <SidebarCommonBtn
        to="/filter/bestseller"
        title="Bestseller"
        onClick={() => dispatch(fetchBestsellerAsync())}
      />
      <SidebarCommonBtn
        to="/filter/promotions"
        title="Promotions"
        onClick={() => dispatch(fetchPromotionsAsync())}
      />
      <SidebarCommonBtn
        to="/filter/all"
        title="All"
        onClick={() => dispatch(fetchAllBookAsync())}
      />
      <SidebarAccordionBtn>
        {genres.map((genre) => (
          <li
            key={genre.id}
            onClick={() => dispatch(fetchBooksByGenreIdAsync(genre.id))}
          >
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
