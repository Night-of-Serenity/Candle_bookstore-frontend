/* eslint-disable react/prop-types */
import defaultCover from "../../../assets/default/book_cover_blank.png";

export default function OrderItem({ book }) {
  const {
    title,
    author,
    bookCover,
    price,
    discount,
    CartItems: {
      0: { quantity },
    },
  } = book;
  return (
    <li className="flex items-center  py-4 justify-between">
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
            <dd className="inline"> {author}</dd>
          </div>
          <div className="font-semibold text-slate-400">
            {(price * (1 - (discount || 0))).toFixed(2)}$/pcs
          </div>
        </dl>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <div className="text-slate-500">{quantity}pcs</div>
      </div>
    </li>
  );
}
