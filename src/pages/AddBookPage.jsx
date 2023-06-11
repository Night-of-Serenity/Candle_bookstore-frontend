// import bookCover from "../assets/book_covers/Think_Again-The_Power_of_Knowing_What_You_Don't_Know.jpg";
import { useState } from "react";
import defaultCover from "../assets/default/book_cover_blank.png";
import { useRef } from "react";
import StarRating from "../features/book/components/StarRating";
import AddBookInput from "../features/book/components/AddBookInput";
import GenreCheckbox from "../features/book/components/GenreCheckbox";

export default function AddBookPage() {
  const [cover, setCover] = useState(null);
  const imgInput = useRef();
  console.log(imgInput);

  //   const handleCoverChange = (e) => {
  //     console.log(e.target);
  //   };
  return (
    <form className="bg-mainlightblue my-20 w-full pr-20">
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
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
          <div className="text-white">
            <div className="mt-8 flex justify-between">
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
                <div className="-ms-0.5 flex">
                  <StarRating className="fill-white" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="prose max-w-none">
                <textarea
                  className=" text-sm textarea-lg w-[400px] h-[150px] text-black bg-white"
                  placeholder="description"
                ></textarea>
              </div>
            </div>
            <section className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Genre</legend>
                <div className="flex flex-wrap gap-1">
                  <GenreCheckbox genre={"Science - Fiction"} />
                </div>
              </fieldset>
              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Size</legend>
                <div className="flex flex-wrap gap-1">
                  <label htmlFor="size_xs" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_xs"
                      className="peer sr-only"
                    />
                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      XS
                    </span>
                  </label>
                  <label htmlFor="size_s" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_s"
                      className="peer sr-only"
                    />
                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      S
                    </span>
                  </label>
                  <label htmlFor="size_m" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_m"
                      className="peer sr-only"
                    />
                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      M
                    </span>
                  </label>
                  <label htmlFor="size_l" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_l"
                      className="peer sr-only"
                    />
                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      L
                    </span>
                  </label>
                  <label htmlFor="size_xl" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_xl"
                      className="peer sr-only"
                    />
                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                      XL
                    </span>
                  </label>
                </div>
              </fieldset>
              <div className="mt-8 flex gap-4">
                <div>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min={1}
                    defaultValue={1}
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
                <button
                  type="submit"
                  className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                >
                  Add to Cart
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </form>
  );
}
