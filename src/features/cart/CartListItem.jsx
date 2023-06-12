import defaultCover from "../../assets/default/book_cover_blank.png";
import { BinIcon } from "../../icons";

export default function CartListItem({
  bookCover,
  title,
  author,
  quantity,
  onChangeQty,
}) {
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
        </dl>
      </div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <form>
          <label htmlFor="Line1Qty" className="sr-only">
            {quantity}
          </label>
          <input
            type="number"
            min={1}
            defaultValue={1}
            id="Line1Qty"
            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            value={quantity}
            onChange={onChangeQty}
          />
        </form>
        <button className="text-gray-600 transition hover:text-red-600">
          <span className="sr-only">Remove item</span>
          <BinIcon />
        </button>
      </div>
    </li>
  );
}
