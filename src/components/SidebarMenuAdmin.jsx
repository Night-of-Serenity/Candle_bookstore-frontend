import SidebarCommonBtn from "./SidebarCommonBtn";
import SidebarAccordionBtn from "./SidebarAccordionBtn";
import { useLocation, Link } from "react-router-dom";

export default function SidebarMenuAdmin() {
  const genres = [
    { title: "Sci-fi", id: 1, author: "John" },
    { title: "Romance", id: 2, author: "Jim" },
    { title: "Drama", id: 3, author: "Jom" },
  ];
  const currentRoute = useLocation().pathname;
  console.log(currentRoute);
  const genreClass = (genreId) => {
    return currentRoute === `/filter/genres/${genreId}`
      ? "block py-2 pl-8 text-sm font-medium text-mainyellow hover:bg-gray-800 hover:text-mainyellow"
      : "block py-2 pl-8 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-gray-200";
  };
  return (
    <ul className="mt-10 space-y-1">
      <li>Admin</li>
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
              {genre.title}
            </Link>
          </li>
        ))}
      </SidebarAccordionBtn>
    </ul>
  );
}
