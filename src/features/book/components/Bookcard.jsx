/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import defaultBookCover from "../../../assets/default/book_cover_blank.png";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCartByIdAsync } from "../../../store/slices/cartSlice";
import { toast } from "react-toastify";

export default function Bookcard({
  id,
  title = "",
  bookCover,
  rating = 0,
  price = 0,
  modalBtnRef,
}) {
  const { isAuthenticated: isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOnClickCart = async (e) => {
    try {
      // console.log(isAuth);
      e.preventDefault();
      // console.log("click card book id", id);

      // show modal when not login
      if (!isAuth) {
        modalBtnRef?.current.click();
        return;
      }
      // console.log("add cart");
      await dispatch(
        addItemToCartByIdAsync({ quantity: 1, bookId: id })
      ).unwrap();
      toast.success("succeed add cart");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center flex-1 justify-center rounded-md w-full">
      <div className="card bg-slate-200 shadow-xl h-full py-3">
        <figure className="h-[250px] mt-2">
          <Link to={`/books/bookdetail/${id}`}>
            <div className="flex justify-center aspect-square object-cover">
              <img
                src={bookCover || defaultBookCover}
                alt="bookcover"
                className=" h-full"
              />
            </div>
          </Link>
        </figure>
        <div className="card-body items-center text-center pt-0 py-5 mt-2">
          <Link to={`/books/bookdetail/${id}`}>
            <span className="card-title text-sm text-black">{title}</span>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-slate-700 font-semibold">{price}$</span>
          <div className="card-actions flex items-center justify-center mb-3">
            <button onClick={handleOnClickCart} className="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
