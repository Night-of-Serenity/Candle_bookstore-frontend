import { useSelector } from "react-redux";

export default function Bookcard() {
  const booksList = useSelector((state) => state.booksList);
  console.log(booksList);
  return <div></div>;
}
