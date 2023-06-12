/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import defaultBookCover from "../../../assets/default/book_cover_blank.png";
import StarRating from "./StarRating";

export default function Bookcard({
  id,
  title = "Harry Potter",
  rating = 0,
  price = 0,
}) {
  return (
    <div className="flex items-center flex-1 justify-center rounded-md w-full">
      <div className="card bg-slate-400 shadow-xl h-full py-2">
        <figure className="">
          <Link to={`/books/bookdetail/${id}`}>
            <img src={defaultBookCover} alt="bookcover" className="w-full" />
          </Link>
        </figure>
        <div className="card-body items-center text-center pt-0 py-5">
          <Link to={`/books/bookdetail/${id}`}>
            <span className="card-title text-sm text-black">{title}</span>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-slate-700 font-semibold">{price}$</span>
          <div className="card-actions flex items-center justify-center mb-3">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}