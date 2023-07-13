export default function AdminOrderListItem() {
  return (
    <tr className="hover:bg-slate-500 hover:text-white hover:font-normal hover:cursor-pointer">
      <td>orderId</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-12 h-12 flex">
              <img className="aspect-square" src={null} alt="bookcover" />
            </div>
          </div>
          <div>
            <div className="font-bold">title</div>
            <div className="text-sm opacity-50">author</div>
          </div>
        </div>
      </td>
      <td>quantity</td>
      <td>price</td>
      <td>sale</td>
      <td>updatedTime</td>
    </tr>
  );
}
