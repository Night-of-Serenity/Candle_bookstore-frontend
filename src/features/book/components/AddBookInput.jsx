/* eslint-disable react/prop-types */
export default function AddBookInput({ idName, placeholder, type }) {
  return (
    <label
      htmlFor={idName}
      className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-mainyellow focus-within:ring-1 focus-within:ring-mainyellow bg-white"
    >
      <input
        type={type}
        id={idName}
        placeholder={placeholder}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm text-black"
      />
      <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
        {placeholder}
      </span>
    </label>
  );
}
