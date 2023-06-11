import { Link } from "react-router-dom";

export default function Pagination() {
  return (
    <>
      <ol className="flex flex-1 justify-center gap-1 text-xs font-medium">
        <li>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-8 h-8 text-gray-900 bg-white border border-gray-100 rounded "
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block w-8 h-8 leading-8 text-center text-gray-900 bg-white border border-gray-100 rounded"
          >
            1
          </Link>
        </li>
        <li className="block w-8 h-8 leading-8 text-center text-white bg-slate-800 border-slate-800 rounded">
          2
        </li>
        <li>
          <Link
            href="#"
            className="block w-8 h-8 leading-8 text-center text-gray-900 bg-white border border-gray-100 rounded"
          >
            3
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="block w-8 h-8 leading-8 text-center text-gray-900 bg-white border border-gray-100 rounded"
          >
            4
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="inline-flex items-center justify-center w-8 h-8 text-gray-900 bg-white border border-gray-100 rounded "
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>
      </ol>
    </>
  );
}
