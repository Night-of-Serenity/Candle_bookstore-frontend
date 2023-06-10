import { SearchIcon } from "../icons";

export default function Searchbar() {
  return (
    <form>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            name="search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-gray-500 focus:border-gray-800"
            placeholder="Search book title..."
            required=""
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-yellow-400 rounded-r-lg border border-maindarkblue border-l-0 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:yellow-500"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </form>
  );
}
