import { useSelector } from "react-redux";
import Bookcard from "./Bookcard";

export default function BookGrid() {
  const booksList = useSelector((state) => state.book.booksList);

  return (
    <div className="grid min-w-[200px] px-5 w-full grid-flow-row grid-cols-5 gap-y-10 gap-x-5">
      {booksList.map((book) => (
        <Bookcard
          key={book.id}
          title={book.title}
          rating={book.rating}
          price={book.price}
        />
      ))}
    </div>
  );
}
