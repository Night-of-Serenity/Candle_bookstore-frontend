import { useSelector } from "react-redux";
import Bookcard from "./Bookcard";

export default function BookGrid() {
  // const numArr = Array.from({ length: 20 }, (_, i) => i + 1);
  const booksList = useSelector((state) => state.book.booksList);
  console.log(booksList);
  return (
    <div className="grid min-w-[200px] px-20 py-10 w-full grid-flow-row grid-cols-5 gap-y-[10em] gap-x-5">
      {booksList.map((book) => (
        <Bookcard
          key={book.id}
          title={book.title}
          rating={book.rating}
          price={book.price}
        />
        // <div className="h-full" key={book.id}>
        //   {book.id}
        // </div>
      ))}
    </div>
  );
}
