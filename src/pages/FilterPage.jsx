/* eslint-disable react/prop-types */
import Sidebar from "../layouts/Sidebar";
import BookContainer from "../features/book/components/BookContainer";

export default function FilterPage() {
  // alert("99999");
  return (
    <>
      <Sidebar />
      <div className="flex-1">
        <BookContainer />
      </div>
    </>
  );
}
