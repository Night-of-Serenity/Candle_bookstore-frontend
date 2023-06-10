export default function BookGrid() {
  const numArr = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="grid w-3/4 grid-flow-row grid-cols-5 gap-y-3 gap-x-1">
      {numArr.map((num) => (
        <div
          className="flex items-center justify-center w-full h-60 bg-mainpaper"
          key={num}
        >
          {num}
        </div>
      ))}
    </div>
  );
}
