// import Carousel from "../components/Carousel";
import HeroContainer from "../components/HeroContainer";
import Bookcard from "../features/book/components/Bookcard";
import Bookrow from "../features/book/components/Bookrow";
import Sidebar from "../layouts/Sidebar";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Homepage() {
  const [bestSellerList, setBestSellerList] = useState([]);
  const [promotionsList, setPromotionsList] = useState([]);
  const booksList = useSelector((state) => state.book.booksList);
  const modalBtnRef = useRef();

  return (
    <>
      <Sidebar />
      <div className="flex-1">
        <main className="flex flex-col w-5/6 min-h-screen mx-auto mb-[100px]">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl text-mainyellow font-semibold py-10 px-5">
              CANDLE
            </h1>
          </div>
          <div className="h-30 mb-[100px]">
            <HeroContainer />
          </div>
          <Bookrow title="Best Seller">
            {booksList.slice(0, 5).map((book) => (
              <Bookcard
                key={book.id}
                id={book.id}
                title={book.title}
                rating={book.rating}
                price={book.price}
                modalBtnRef={modalBtnRef}
              />
            ))}
          </Bookrow>
          <Bookrow title="Promotions">
            {booksList.slice(5, 10).map((book) => (
              <Bookcard
                key={book.id}
                id={book.id}
                title={book.title}
                rating={book.rating}
                price={book.price}
                modalBtnRef={modalBtnRef}
              />
            ))}
          </Bookrow>
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
        </main>
      </div>
    </>
  );
}
