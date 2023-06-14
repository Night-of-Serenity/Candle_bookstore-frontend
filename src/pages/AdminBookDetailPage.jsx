// import bookCover from "../assets/book_covers/Think_Again-The_Power_of_Knowing_What_You_Don't_Know.jpg";
import { useEffect, useState } from "react";
import defaultCover from "../assets/default/book_cover_blank.png";
import StarRating from "../features/book/components/StarRating";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import * as BookApi from "../api/book-api";
import { useForm } from "react-hook-form";
import AddBookInput from "../features/book/components/AddBookInput";
import { useSelector } from "react-redux";
import GenreCheckbox from "../features/book/components/GenreCheckbox";

export default function AdminBookDetailsPage() {
  // bookid param from url
  const { bookid } = useParams();
  console.log(bookid);

  // const [editMode, setEditMode] = useState(false);

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
  const genres = useSelector((state) => state.book.genresList);
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    // defaultValues: useMemo(
    //   () => ({
    //     title: bookDetail?.title,
    //     author: bookDetail?.author,
    //     genres: [1, 3],
    //     pages: bookDetail?.pages,
    //     publishedYear: bookDetail?.published_year,
    //     price: bookDetail?.price,
    //     discount: bookDetail?.discount,
    //     quantity: bookDetail?.quantity,
    //     description: bookDetail?.description,
    //   }),
    //   [bookDetail]
    // ),
  });

  const fetchBook = async (bookId) => {
    try {
      const res = await BookApi.getBookById(bookId);
      console.log(res.data);
      if (res.status !== 200) throw res;
      setBookDetail(res.data);
      setEditMode(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteBook = async () => {
    try {
      console.log("delete book id:", bookid);
      const res = await BookApi.deleteBookById(bookid);
      if (res.data) {
        await fetchBook(bookid);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const onSubmitEdit = async (data) => {
    try {
      console.log(data);
      const res = await BookApi.editBook(data, bookid);
      console.log(res.data);
      if (res.data) {
        await fetchBook(bookid);
        toast.success("edit book succeed");
        // navigate(`/books/bookdetail/${res.data.id}`);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchBook(bookid);
  }, [bookid]);

  useEffect(() => {
    reset(bookDetail);
  }, [bookDetail]);

  // const [quantityInput, setQuantityInput] = useState(1);

  return (
    <form
      onSubmit={handleSubmit(onSubmitEdit)}
      className="bg-mainlightblue my-20 w-full pr-20"
    >
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
                {editMode ? (
                  <AddBookInput
                    idName="bookTitle"
                    type="text"
                    placeholder={"Book Title"}
                    formSubmit={register("title", { required: true })}
                  />
                ) : (
                  bookDetail?.title
                )}
              </h1>
              {editMode ? (
                <AddBookInput
                  idName="author"
                  type="text"
                  placeholder={"Author's name"}
                  inputName={"author"}
                  formSubmit={register("author", { required: true })}
                />
              ) : (
                <p>By {bookDetail?.author}</p>
              )}
            </div>
            <div className="mt-8 flex">
              <StarRating rating={bookDetail?.rating} className="fill-yellow" />
            </div>
            <section className="mt-8">
              {editMode ? (
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Genre</legend>
                  <div className="flex flex-wrap gap-1">
                    {genres.map((genre) => (
                      <GenreCheckbox
                        key={genre.id}
                        genre={genre.genre}
                        id={genre.id}
                        onSubmit={register}
                      />
                    ))}
                  </div>
                </fieldset>
              ) : (
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
              )}
              {editMode ? (
                <div className="mt-4">
                  <label
                    htmlFor="pages"
                    className="mr-2 text-sm font-medium text-white"
                  >
                    <span>Pages</span>
                  </label>
                  <input
                    type="number"
                    id="pages"
                    min={1}
                    defaultValue={1}
                    placeholder="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
                    {...register("pages", { required: true })}
                  />
                </div>
              ) : (
                <div className="mt-4">Pages: {bookDetail?.pages}</div>
              )}

              {editMode ? (
                <div className="mt-4">
                  <label
                    htmlFor="publishedYear"
                    className="mr-2 text-sm font-medium text-white"
                  >
                    <span>Published year</span>
                  </label>
                  <input
                    type="number"
                    id="publishedYear"
                    min={1900}
                    defaultValue={2023}
                    placeholder="2023"
                    className="w-14 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
                    {...register("publishedYear", { required: true })}
                  />
                </div>
              ) : (
                <div className="mt-4">
                  Published Year: {bookDetail?.publishedYear}
                </div>
              )}

              {editMode ? (
                <div className="mt-4">
                  <label
                    htmlFor="price"
                    className="mr-2 text-sm font-medium text-white"
                  >
                    <span>Price</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    min={0}
                    defaultValue={10.0}
                    placeholder="10.00"
                    step=".01"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
                    {...register("price", { required: true })}
                  />
                </div>
              ) : (
                <div className="mt-4">Price: {bookDetail?.price}$</div>
              )}

              {editMode ? (
                <div className="mt-4">
                  <label
                    htmlFor="discount"
                    className="mr-2 text-sm font-medium text-white"
                  >
                    <span>Discount</span>
                  </label>
                  <input
                    type="number"
                    id="discount"
                    min={0}
                    defaultValue={0.0}
                    placeholder="0.00"
                    step=".01"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
                    {...register("discount")}
                  />
                </div>
              ) : (
                <div className="mt-4">
                  Discount:
                  {(bookDetail?.discount * bookDetail?.price).toFixed(2)}$ (
                  {(bookDetail?.discount * 100).toFixed()}%)
                </div>
              )}

              {editMode ? (
                <div className="mt-4">
                  <label
                    htmlFor="quantity"
                    className=" mr-2 text-sm font-medium text-white"
                  >
                    <span>Stock</span>
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min={1}
                    defaultValue={1}
                    placeholder="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
                    {...register("quantity")}
                  />
                </div>
              ) : (
                <div className="mt-4">Stock: {bookDetail?.quantity} pcs.</div>
              )}

              {editMode ? (
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <legend className="mb-1 text-sm font-medium text-white">
                      description
                    </legend>
                    <textarea
                      {...register("description")}
                      className=" text-sm textarea-lg min-w-[600px] h-[150px] text-black bg-white"
                      placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex odit officia repudiandae? Excepturi eaque ipsum temporibus. Sed ullam optio consequatur officiis numquam neque culpa maiores placeat nobis mollitia voluptates aliquam, deserunt qui similique voluptas tempora. Eaque nemo illum odio recusandae necessitatibus, quas, iure repudiandae iusto provident et, harum possimus reiciendis soluta nobis perspiciatis deleniti. Repellendus totam temporibus harum quis."
                    ></textarea>
                  </div>
                </div>
              ) : (
                <>
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
                </>
              )}

              {editMode ? (
                <div className="mt-8 flex gap-4">
                  <button
                    type="submit"
                    className="block rounded bg-mainyellow px-5 py-3 text-xs font-medium text-black hover:bg-yellow-500 hover:text-white"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    type="button"
                    className="block rounded bg-red-600 px-5 py-3 text-xs font-medium text-black hover:bg-red-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex w-[150px] justify-between my-5">
                  <span
                    onClick={() => setEditMode(true)}
                    className="btn btn-warning btn-sm"
                  >
                    edit
                  </span>
                  <span onClick={deleteBook} className="btn btn-error btn-sm">
                    delete
                  </span>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </form>
  );
}
