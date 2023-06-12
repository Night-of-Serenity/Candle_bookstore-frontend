// import bookCover from "../assets/book_covers/Think_Again-The_Power_of_Knowing_What_You_Don't_Know.jpg";
import { useState } from "react";
import defaultCover from "../assets/default/book_cover_blank.png";
import { useRef } from "react";
// import StarRating from "../features/book/components/StarRating";
import AddBookInput from "../features/book/components/AddBookInput";
import GenreCheckbox from "../features/book/components/GenreCheckbox";
import { useSelector } from "react-redux";

export default function AddBookPage() {
  const [cover, setCover] = useState(null);
  const imgInput = useRef();
  console.log(imgInput);

  const genres = useSelector((state) => state.book.genresList);
  const initialGenres = genres.map((genre) => ({ ...genre, checked: false }));
  const [genresInput, setGenresInput] = useState(initialGenres);
  console.log(initialGenres);
  // const handleOnChangeGenres = (e) => {
  //   console.dir(e.target);
  //   setGenresInput(state=>({...state,...state[e.tartget.name].checked : e.target.checked}))
  // };

  return (
    <form className="bg-mainlightblue my-20 w-full pr-20">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center w-full self-auto h-full">
            <div className="w-[300px]">
              <img alt="bookcover" src={cover || defaultCover} />
            </div>
            <input
              type="file"
              ref={imgInput}
              className="hidden"
              onChange={(e) => {
                console.log(e);
                setCover(e.target.files[0]);
              }}
            ></input>
            <button
              className="btn btn-primary btn-outline btn-sm"
              onClick={() => imgInput.current.click()}
            >
              Change cover
            </button>
          </div>
          <div className="text-white col-span-2">
            <div className="max-w-[35ch] space-y-2">
              <h1 className="text-4xl font-bold sm:text-2xl w-[400px]">
                <AddBookInput
                  idName="bookTitle"
                  type="text"
                  placeholder={"Book Title"}
                />
              </h1>
              <AddBookInput
                idName="author"
                type="text"
                placeholder={"Author's name"}
                inputName={"author"}
              />
              {/* <div className="-ms-0.5 flex">
                  <StarRating className="fill-white" />
                </div> */}
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <legend className="mb-1 text-sm font-medium text-white">
                  description
                </legend>
                <textarea
                  className=" text-sm textarea-lg w-[400px] h-[150px] text-black bg-white"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium sapiente temporibus eius deleniti provident voluptatum officia molestias libero ab?"
                ></textarea>
              </div>
            </div>
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
                defaultValue={0.01}
                placeholder="0.01"
                step=".01"
                className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="discount"
                className="mr-2 text-sm font-medium text-white"
              >
                <span>discount</span>
              </label>
              <input
                type="number"
                id="discount"
                min={0}
                defaultValue={0.01}
                placeholder="0.01"
                step=".01"
                className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
              />
            </div>
            <section className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Genre</legend>
                <div className="flex flex-wrap gap-1">
                  {genresInput.map((genreItem) => (
                    <GenreCheckbox
                      key={genreItem.id}
                      name={genreItem.id}
                      genre={genreItem.genre}
                      // isChecked={genreItem.checked}
                      // onChange={handleOnChangeGenres}
                    />
                  ))}
                </div>
              </fieldset>
              <div className="mt-8 flex gap-4">
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
                    defaultValue={1}
                    placeholder="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none text-black"
                  />
                </div>
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
