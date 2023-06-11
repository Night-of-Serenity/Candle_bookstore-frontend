// import Carousel from "../components/Carousel";
import Bookcard from "../features/book/components/Bookcard";
import Bookrow from "../features/book/components/Bookrow";
import Sidebar from "../layouts/Sidebar";

export default function Homepage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1">
        <main className="flex flex-col w-5/6 min-h-screen mx-auto">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl text-mainyellow font-semibold py-10 px-5">
              CANDLE
            </h1>
          </div>
          <Bookrow title="Best Seller">
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
          </Bookrow>
          <Bookrow title="Promotions">
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
            <Bookcard />
          </Bookrow>
        </main>
      </div>
    </>
  );
}
