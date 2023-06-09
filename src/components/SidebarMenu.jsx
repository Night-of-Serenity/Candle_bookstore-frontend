import SidebarAccordionBtn from "./SidebarAccordionBtn";
import SidebarCommonBtn from "./SidebarCommonBtn";

export default function SidebarMenu() {
  const genres = [
    { title: "Sci-fi", id: 1, author: "John" },
    { title: "Romance", id: 2, author: "Jim" },
    { title: "Drama", id: 3, author: "Jom" },
  ];
  return (
    <ul className="mt-10 space-y-1">
      <SidebarCommonBtn>Bestseller</SidebarCommonBtn>
      <SidebarCommonBtn>Promotions</SidebarCommonBtn>
      <SidebarCommonBtn>All</SidebarCommonBtn>
      <SidebarAccordionBtn>{genres}</SidebarAccordionBtn>
    </ul>
  );
}
