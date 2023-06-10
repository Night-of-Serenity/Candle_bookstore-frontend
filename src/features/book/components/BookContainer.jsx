import BookGrid from "./BookGrid";
import Pagination from "../../../components/Pagination";
import BookContainerHeader from "./BookContainerHeader";
export default function BookContainer() {
  return (
    <div className="flex flex-col ml-0 w-4/5 items-center">
      <BookContainerHeader />
      <BookGrid />
      <Pagination />
    </div>
  );
}
