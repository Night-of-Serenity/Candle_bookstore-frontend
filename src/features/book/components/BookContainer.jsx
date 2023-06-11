import BookGrid from "./BookGrid";
import Pagination from "../../../components/Pagination";
import BookContainerHeader from "./BookContainerHeader";
export default function BookContainer() {
  return (
    <div className="flex flex-col items-center min-h-screen w-5/6 mx-10 mb-5">
      <BookContainerHeader />
      <BookGrid />
      <div className="my-10">
        <Pagination />
      </div>
    </div>
  );
}
