// import bookCover from "../assets/book_covers/Think_Again-The_Power_of_Knowing_What_You_Don't_Know.jpg";
import { useEffect, useState } from "react";
import defaultCover from "../assets/default/book_cover_blank.png";
import StarRating from "../features/book/components/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { useRef } from "react";
import * as BookApi from "../api/book-api";
import { addItemToCartByIdAsync } from "../store/slices/cartSlice";
import { toast } from "react-toastify";
import { fetchBooksByGenreIdAsync } from "../store/slices/bookslice";

export default function UserBookDetailsPage() {
  const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  // bookid param from url
  const { bookid } = useParams();
  // console.log(bookid);

  // book slice booklist bookdata
  // const booksList = useSelector((state) => state.book.booksList);
  const [bookDetail, setBookDetail] = useState({});
  // console.log(bookDetail);

  // const bookDetail = booksList.find((book) => +book.id === +bookid);

  const [quantityInput, setQuantityInput] = useState(1);
  const modalBtnRef = useRef();
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!isAuthen) {
      modalBtnRef.current.click();
      return;
    }
    // console.log(quantityInput);
    const addItemASync = async () => {
      dispatch(
        addItemToCartByIdAsync({ bookId: bookid, quantity: +quantityInput })
      );
    };
    addItemASync();
    toast.success("add item into cart");
  };

  const navigate = useNavigate();

  const fetchBookDetail = async (bookid) => {
    try {
      const res = await BookApi.getBookById(bookid);
      if (!res.data) {
        navigate("/");
      }
      setBookDetail(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickGenre = async (genreId) => {
    dispatch(fetchBooksByGenreIdAsync(genreId));
    navigate(`/filter/genres/${genreId}`);
  };
  useEffect(() => {
    fetchBookDetail(bookid);
  }, [bookid]);

  return (
    <div className="bg-mainlightblue my-20 w-full pr-20">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center w-full self-auto h-full">
            <div className="w-[300px]">
              <img
                alt="bookcover"
                src={bookDetail?.bookCover || defaultCover}
              />
            </div>
          </div>
          <div className="text-white col-span-2">
            <div className="max-w-[35ch] space-y-2">
              <h1 className="text-4xl font-bold sm:text-2xl w-[400px]">
                {bookDetail?.title}
              </h1>
              <p>By {bookDetail?.author}</p>
            </div>
            <div className="mt-8 flex">
              <StarRating rating={bookDetail?.rating} className="fill-yellow" />
            </div>
            <section className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Genre</legend>
                <div className="flex flex-wrap gap-1">
                  {bookDetail?.BookToGenres &&
                    bookDetail?.BookToGenres.map((genre) => (
                      <span
                        onClick={() => {
                          handleOnClickGenre(genre.Genre.id);
                        }}
                        key={genre.Genre.id}
                        className="btn btn-outline btn-primary btn-sm"
                      >
                        {genre.Genre.genre}
                      </span>
                    ))}
                </div>
              </fieldset>

              <div className="mt-4">Pages: {bookDetail?.pages}</div>
              <div className="mt-4">
                Published Year: {bookDetail?.publishedYear}
              </div>
              <div className="mt-4">Price: {bookDetail?.price}$</div>
              <div className="mt-4">
                Discount:
                {(bookDetail?.discount * bookDetail?.price).toFixed(2)}$ (
                {(bookDetail?.discount * 100).toFixed()}%)
              </div>
              <div className="mt-4">Stock: {bookDetail?.quantity} pcs.</div>
              <div className="mt-4">
                <div className="flex justify-start">
                  <div>
                    Sale Quantity: {bookDetail?.saleQuantity || 0} pcs.{" "}
                  </div>
                </div>
              </div>
              <div className="mt-4">description</div>
              <p className="bg-slate-500 p-2 rounded-md min-h-[150px]">
                {bookDetail?.description}
              </p>
              <form onSubmit={handleOnSubmit} className="mt-8 flex gap-4">
                <div>
                  <label
                    htmlFor="quantity"
                    className=" mr-2 text-sm font-medium text-white"
                  >
                    <span>Qty</span>
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min={1}
                    step={1}
                    // defaultValue={1}
                    placeholder="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
                    value={quantityInput}
                    onChange={(e) => {
                      e.preventDefault();
                      setQuantityInput(e.target.value);
                      // console.log(quantityInput);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="block rounded bg-mainyellow px-5 py-3 text-xs font-medium text-black hover:bg-yellow-500 hover:text-white"
                >
                  ADD TO CART
                </button>
              </form>
            </section>
            <div className="invisible">
              <Modal modalBtnRef={modalBtnRef}>
                <div className="w-30 h-20 flex justify-center items-center text-xl">
                  <p className="py-4">
                    Please{" "}
                    <Link to="/login" className="font-bold">
                      Login
                    </Link>{" "}
                    before add cart{" "}
                  </p>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
