import { useSelector } from "react-redux";
import Bookcard from "./Bookcard";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";

export default function BookGrid() {
  const booksList = useSelector((state) => state.book.booksList);
  const modalBtnRef = useRef();
  return (
    <>
      <div className="grid min-w-[200px] px-5 w-full grid-flow-row grid-cols-5 gap-y-10 gap-x-5">
        {booksList.map((book) => (
          <Bookcard
            id={book.id}
            key={book.id}
            title={book.title}
            rating={book.rating}
            price={book.price}
            modalBtnRef={modalBtnRef}
          />
        ))}
      </div>
      <div className="invisible">
        <Modal modalBtnRef={modalBtnRef}>
          <div className="w-30 h-20 flex justify-center items-center text-xl">
            <p className="py-4">
              Please{" "}
              <Link to="/login" className="font-bold">
                Login
              </Link>{" "}
              before add cart{" "}
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
}
