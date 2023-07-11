import defaultCover from "../../../assets/default/book_cover_blank.png";

export default function OrderItem() {
  return (
    <li className="flex items-center  py-4 justify-between">
      <img
        src={defaultCover}
        alt=""
        className="h-16 w-16 rounded object-cover"
      />
      <div>
        <h3 className="text-sm text-gray-900">{"title"}</h3>
        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Author:</dt>
            <dd className="inline"> {"John Doe"}</dd>
          </div>
          <div className="font-semibold text-slate-400">
            {/* {(price * (1 - (discount || 0))).toFixed(2)}$/pcs */}
            {"100$"}
          </div>
        </dl>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <div className="text-slate-500">{"3"}pcs</div>
      </div>
    </li>
  );
}
