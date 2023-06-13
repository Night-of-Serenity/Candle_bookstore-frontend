// import bookCover from "../assets/book_covers/Think_Again-The_Power_of_Knowing_What_You_Don't_Know.jpg";
// import { useState } from "react";
import defaultCover from "../assets/default/book_cover_blank.png";
// import { useRef } from "react";
import StarRating from "../features/book/components/StarRating";
import AddBookInput from "../features/book/components/AddBookInput";
import GenreCheckbox from "../features/book/components/GenreCheckbox";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as BookApi from "../api/book-api";
import { useNavigate } from "react-router-dom";

export default function AddBookPage() {
  // const [cover, setCover] = useState(null);
  // const imgInput = useRef();
  // console.log(imgInput);

  const genres = useSelector((state) => state.book.genresList);
  console.log(genres);
  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      console.log(data);

      // const formData = new FormData();
      // Object.entries(data).forEach(([field, value]) =>
      //   formData.append(field, value)
      // );

      // // Check formData Display the key/value pairs
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      const res = await BookApi.addbook(data);
      console.log(res.data);
      if (res.data) {
        toast.success("add book successful");
        navigate(`/books/bookdetail/${res.data.id}`);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // if (Object.keys(errors).length) {
  //   Object.entries(errors).map(([errField, errObj]) => {
  //     // console.log(`${errField} is ${errObj.type}`);
  //     toast.error(`${errField} is ${errObj.type}`);
  //   });
  // }
  // console.log(watch("genres"));
  // console.log(watch("title"));
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-mainlightblue my-20 w-full pr-20"
    >
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center w-full self-auto h-full">
            <div className="w-[300px]">
              <img alt="bookcover" src={defaultCover} />
            </div>
            {/* <input
              type="file"
              ref={imgInput}
              className="hidden"
              onChange={(e) => {
                console.log(e);
                if (e.target.files[0]) {
                  setCover(e.target.files[0]);
                }
              }}
            ></input>
            <button
              className="btn btn-primary btn-outline btn-sm"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                imgInput.current.click();
              }}
            >
              Change cover
            </button> */}
          </div>
          <div className="text-white col-span-2">
            <div className="max-w-[35ch] space-y-2">
              <h1 className="text-4xl font-bold sm:text-2xl w-[400px]">
                <AddBookInput
                  idName="bookTitle"
                  type="text"
                  placeholder={"Book Title"}
                  formSubmit={register("title", { required: true })}
                />
              </h1>
              <AddBookInput
                idName="author"
                type="text"
                placeholder={"Author's name"}
                inputName={"author"}
                formSubmit={register("author", { required: true })}
              />
            </div>
            <div className="mt-8 flex">
              <StarRating className="fill-white" />
            </div>
            <section className="mt-8">
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
              <div className="mt-4">
                <div className="flex justify-start">
                  <div>Sale Quantity: 0 pcs. </div>
                </div>
              </div>
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

              <div className="mt-8 flex gap-4">
                <button
                  type="submit"
                  className="block rounded bg-mainyellow px-5 py-3 text-xs font-medium text-black hover:bg-yellow-500 hover:text-white"
                >
                  ADD BOOK
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </form>
  );
}
