import Bookcard from "../../book/components/Bookcard";
export default function Bookrow() {
  return (
    <div className="flex justify-evenly">
      <div className="w-20">
        <Bookcard />
      </div>
      <div className="w-20">
        <Bookcard />
      </div>
      <div className="w-20">
        <Bookcard />
      </div>
      <div className="w-20">
        <Bookcard />
      </div>
      <div className="w-20">
        <Bookcard />
      </div>
    </div>
  );
}
