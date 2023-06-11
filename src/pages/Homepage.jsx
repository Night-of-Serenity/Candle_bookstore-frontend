// import Carousel from "../components/Carousel";
import Bookrow from "../features/book/components/Bookrow";
import Sidebar from "../layouts/Sidebar";

export default function Homepage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1">
        <main className="flex flex-col w-5/6 min-h-screen">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl text-mainyellow font-semibold py-10 px-5">
              CANDLE
            </h1>
          </div>
          {/* <div className="flex-1 flex justify-center items-center ">
            <Carousel />
          </div> */}
          <div className="flex-1 my-5">
            <div className="flex justify-between p-3">
              <div className="text-slate-700 font-semibold">Best Seller</div>
              <div className="text-slate-500">see more</div>
            </div>
            <div>
              <Bookrow />
            </div>
          </div>
          <div className="flex-1 my-5">
            <div className="flex justify-between p-3">
              <div className="text-slate-700 font-semibold">Promotion</div>
              <div className="text-slate-500">see more</div>
            </div>
            <div>
              <Bookrow />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
