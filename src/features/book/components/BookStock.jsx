import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import BookStockList from "./BookStockList";
import * as BookApi from "../../../api/book-api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function BookStock() {
  const [stock, setStock] = useState([]);

  const fetchStoct = async () => {
    try {
      const res = await BookApi.getAllBooks();
      // console.log(res);
      if (res.status !== 200) throw res;
      setStock(res.data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    fetchStoct();
  }, []);
  return (
    <div className="flex flex-col my-20 px-20 min-h-screen min-w-[800px]">
      <div className="flex-1 bg-slate-300 rounded-lg flex flex-col items-center">
        <div className="flex self-start justify-start items-center h-20 px-5 w-full">
          <span className="text-slate-600 font-semibold text-xl">Stock</span>
        </div>
        <hr className="border-slate-400 w-[95%]" />
        <div className="min-h-screen w-full">
          <BookStockList booksList={stock} />
        </div>
      </div>
      <div className="flex items-center mt-5">
        <Pagination />
        <Link to="/books/addbook">
          <button className="btn btn-primary btn-sm rounded-md ">
            Add Book
          </button>
        </Link>
      </div>
    </div>
  );
}
