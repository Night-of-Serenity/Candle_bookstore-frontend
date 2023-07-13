/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Bookrow({ title, children, onNavigate }) {
  return (
    <div className="my-5">
      <div className="flex justify-between p-3">
        <div className="text-slate-700 font-semibold">{title}</div>
        <div onClick={onNavigate} className="text-slate-500 cursor-pointer">
          see more
        </div>
      </div>
      <div>
        <div className="flex justify-evenly gap-3">{children}</div>
      </div>
    </div>
  );
}
