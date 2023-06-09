/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import defaultCover from "../../assets/default/book_cover_blank.png";
import { AddIcon, BinIcon, MinusIcon } from "../../icons";
import {
  reduceItemByIdAsync,
  addItemToCartByIdAsync,
  deleteItemByIdAsync,
} from "../../store/slices/cartSlice";

export default function CartListItem({
  bookId,
  bookCover,
  title,
  author,
  quantity,
  price,
  discount,
}) {
  // console.log("quantity", quantity);
  const dispatch = useDispatch();
  const handleClickAdd = () => {
    dispatch(addItemToCartByIdAsync({ bookId: bookId, quantity: 1 }));
    // toast.success("add item succeed");
  };

  const handleClickReduce = () => {
    dispatch(reduceItemByIdAsync({ bookId: bookId, quantity: 1 }));
    // toast.success("remove item succeed");
  };

  const handleClickDelete = () => {
    dispatch(deleteItemByIdAsync(bookId));
    // toast.success("remove item succeed");
  };
  return (
    <li className="flex items-center gap-4">
      <img
        src={bookCover || defaultCover}
        alt=""
        className="h-16 w-16 rounded object-cover"
      />
      <div>
        <h3 className="text-sm text-gray-900">{title}</h3>
        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Author:</dt>
            <dd className="inline"> {author || "John Doe"}</dd>
          </div>
          <div className="font-semibold text-slate-400">
            {(price * (1 - (discount || 0))).toFixed(2)}$/pcs
          </div>
        </dl>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <div className="text-slate-500">{quantity}pcs</div>
        {/* <form> */}
        {/* <label htmlFor="Line1Qty" className="sr-only">
          <span>{quantity}</span>
        </label> */}
        {/* <input
          type="number"
          min={1}
          defaultValue={quantity}
          id="Line1Qty"
          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          value={input}
          onChange={handleOnchange}
        /> */}
        <span className="cursor-pointer" onClick={handleClickAdd}>
          <AddIcon />
        </span>
        <span className="cursor-pointer" onClick={handleClickReduce}>
          <MinusIcon />
        </span>
        {/* </form> */}
        <button
          onClick={handleClickDelete}
          className="text-gray-600 transition hover:text-red-600"
        >
          <span className="sr-only">Remove item</span>
          <BinIcon />
        </button>
      </div>
    </li>
  );
}
