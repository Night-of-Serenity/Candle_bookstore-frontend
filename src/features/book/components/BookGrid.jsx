import Bookcard from "./Bookcard";

export default function BookGrid() {
  const numArr = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="grid min-w-[200px] px-20 py-10 w-full grid-flow-row grid-cols-5 gap-y-10 gap-x-5">
      {numArr.map((num) => (
        <Bookcard key={num} title={num} />
      ))}
    </div>
  );
}
