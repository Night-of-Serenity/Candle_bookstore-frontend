// import Carousel from "../components/Carousel";
import HeroContainer from "../components/HeroContainer";
import Bookcard from "../features/book/components/Bookcard";
import Bookrow from "../features/book/components/Bookrow";
import Sidebar from "../layouts/Sidebar";

export default function Homepage() {
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
