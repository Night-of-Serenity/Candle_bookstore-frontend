/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import defaultBookcover from "../../../assets/default/book_cover_blank.png";
export default function BookListItem({
  bookId,
  title,
  author,
  bookCover,
  quantity,
  price,
  sale = 0,
  updatedTime = new Date().toISOString(),
}) {
  bookCover = bookCover || defaultBookcover;
  const navigate = useNavigate();

  return (
    <tr
      className="hover:bg-slate-500 hover:text-white hover:font-normal hover:cursor-pointer"
      onClick={() => navigate(`/books/bookdetail/${bookId}`)}
    >
      <td>{bookId}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-12 h-12 flex">
              <img className="aspect-square" src={bookCover} alt="bookcover" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{author}</div>
          </div>
        </div>
      </td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{sale}</td>
      <td>{updatedTime}</td>
    </tr>
  );
}
