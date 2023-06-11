/* eslint-disable react/prop-types */
import { useState } from "react";

export default function GenreCheckbox({ genre, isChecked, onChange }) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox h-4 w-4 text-yellow-500 rounded-full bg-yellow-400 outline-none focus:outline-none"
        checked={isChecked}
        onChange={onChange}
      />
      <span>{genre}</span>
    </label>
  );
}

// export default function GenreButton({ genre }) {
//   const [isActive, setIsActive] = useState(false);
//   const className = isActive
//     ? "py-2 px-4 rounded-full bg-yellow-500 text-white focus:outline-none"
//     : "py-2 px-4 rounded-full bg-yellow-300 focus:outline-none";

//   return (
//     <button className={className} onClick={() => setIsActive(!isActive)}>
//       {genre}
//     </button>
//   );
// }
