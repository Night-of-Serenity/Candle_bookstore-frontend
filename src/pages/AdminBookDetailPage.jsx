// import bookCover from "../assets/book_covers/Think_Again-The_Power_of_Knowing_What_You_Don't_Know.jpg";
import { useState } from "react";
import defaultCover from "../assets/default/book_cover_blank.png";
import StarRating from "../features/book/components/StarRating";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function AdminBookDetailsPage() {
  // const isAuthen = useSelector((state) => state.auth.isAuthenticated);

  // bookid param from url
  const { bookid } = useParams();
  console.log(bookid);

  // book slice booklist bookdata
  const booksList = useSelector((state) => state.book.booksList);
  console.log(booksList);

  const bookDetail = booksList.find((book) => +book.id === +bookid);

  const [quantityInput, setQuantityInput] = useState(1);

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
                {bookDetail.title}
              </h1>
              <p>By {bookDetail.author}</p>
            </div>
            <div className="mt-8 flex">
              <StarRating rating={bookDetail.rating} className="fill-yellow" />
            </div>
            <section className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Genre</legend>
                <div className="flex flex-wrap gap-1">
                  {bookDetail.Genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="btn btn-outline btn-primary btn-sm"
                    >
                      {genre.genre}
                    </span>
                  ))}
                </div>
              </fieldset>

              <div className="mt-4">Pages: {bookDetail.pages}</div>
              <div className="mt-4">
                Published Year: {bookDetail.published_year}
              </div>
              <div className="mt-4">Price: {bookDetail.price}$</div>
              <div className="mt-4">
                Discount:
                {(bookDetail.discount * bookDetail.price).toFixed(2)}$ (
                {(bookDetail.discount * 100).toFixed()}%)
              </div>
              <div className="mt-4">Stock: {bookDetail?.quantity}</div>
              <div className="mt-4">
                <div className="flex justify-start">
                  <div>
                    Sale Quantity: {bookDetail?.sale_quantity || 0} pcs.{" "}
                  </div>
                </div>
              </div>
              <div className="mt-4">description</div>
              <p className="bg-slate-500 p-2 rounded-md min-h-[150px]">
                {bookDetail.description}
              </p>
              <form className="mt-8 flex gap-4">
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
                    // defaultValue={1}
                    placeholder="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
                    value={quantityInput}
                    onChange={(e) => setQuantityInput(e.target.value)}
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
          </div>
        </div>
      </div>
    </div>
  );
}
