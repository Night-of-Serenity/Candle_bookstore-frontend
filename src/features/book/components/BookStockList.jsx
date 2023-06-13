/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";
import BookListItem from "./BookListItem";

export default function BookStockList({ booksList }) {
  // const booksList = useSelector((state) => state.book.booksList);

  return (
    <div className="overflow-x-auto h-screen">
      <table className="table table-pin-rows text-black">
        {/* head */}
        <thead>
          <tr className="bg-slate-600 text-white">
            <th>id</th>
            <th>title</th>
            <th>quantity</th>
            <th>price</th>
            <th>sale</th>
            <th>updated time</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {booksList.map((book) => (
            <BookListItem
              key={book.id}
              bookId={book.id}
              title={book.title}
              author={book.author}
              bookCover={book.cover}
              quantity={book.quantity}
              price={book.price}
              sale={book.saleQuantity}
            />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr className="bg-slate-600 text-white">
            <th>id</th>
            <th>title</th>
            <th>quantity</th>
            <th>price</th>
            <th>sale</th>
            <th>updated time</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
