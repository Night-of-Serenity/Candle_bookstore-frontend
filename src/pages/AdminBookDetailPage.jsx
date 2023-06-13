// import bookCover from "../assets/book_covers/Think_Again-The_Power_of_Knowing_What_You_Don't_Know.jpg";
import { useEffect, useState } from "react";
import defaultCover from "../assets/default/book_cover_blank.png";
import StarRating from "../features/book/components/StarRating";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import * as BookApi from "../api/book-api";

export default function AdminBookDetailsPage() {
  // bookid param from url
  const { bookid } = useParams();
  console.log(bookid);

  const initialBookDetail = {
    title: "",
    author: "",
    pages: "",
    publishedYear: "",
    quantity: "",
    saleQuantity: "",
    price: "",
    discount: "",
    description: "",
    reviewCount: "",
    rating: "",
    bookCover: "",
    BookToGenres: [],
  };

  const [bookDetail, setBookDetail] = useState(initialBookDetail);

  const fetchBook = async (bookId) => {
    try {
      const res = await BookApi.getBookById(bookId);
      console.log(res.data);
      if (res.status !== 200) throw res;
      setBookDetail(res.data);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchBook(bookid);
  }, [bookid]);

  // const [quantityInput, setQuantityInput] = useState(1);

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
                  {bookDetail &&
                    bookDetail.BookToGenres.map((genre) => (
                      <span
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
                Published Year: {bookDetail?.published_year}
              </div>
              <div className="mt-4">Price: {bookDetail?.price}$</div>
              <div className="mt-4">
                Discount:
                {(bookDetail?.discount * bookDetail?.price).toFixed(2)}$ (
                {(bookDetail?.discount * 100).toFixed()}%)
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
                {bookDetail?.description}
              </p>
              <div className="flex w-[150px] justify-between my-5">
                <span className="btn btn-warning btn-sm">edit</span>
                <span className="btn btn-error btn-sm">delete</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
