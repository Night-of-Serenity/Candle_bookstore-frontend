/* eslint-disable react/prop-types */
import defaultBookCover from "../../../assets/default/book_cover_blank.png";
import StarRating from "./StarRating";

export default function Bookcard({ title }) {
  return (
    <div className="flex items-center w-[200px] justify-center h-fit rounded-md">
      <div className="card bg-slate-400 shadow-xl ">
        <figure className="">
          <img src={defaultBookCover} alt="bookcover" className="w-full" />
        </figure>
        <div className="card-body items-center text-center pt-0 py-5">
          <h2 className="card-title text-sm text-black">
            Book title{title} Lorem ipsum dolor sit amet.
          </h2>
          <StarRating rating={5} />
          <span className="text-slate-700">20$</span>
          <div className="card-actions flex items-center justify-center">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
