// import Carousel from "../components/Carousel";
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
          <div className="flex-1">bestseller carousel</div>
          <div className="flex-1">promotion carousel</div>
        </main>
      </div>
    </>
  );
}
