/* eslint-disable react/prop-types */
// import { useState } from "react";
export default function AdminOrderListItem({
  order,
  onChangeOrderStatus,
  onOpenSlip,
}) {
  const orderStatus = order?.orderStatus == "pending" ? false : true;
  //   const [toggleOrderStatus, setToggleOrderStatus] = useState(orderStatus);

  const onChangeToggle = (e) => {
    e.preventDefault();
    console.dir(e.target);
    // setToggleOrderStatus(!orderStatus);
    onChangeOrderStatus(order.id, order.orderStatus);
  };
  return (
    <tr className="hover:bg-slate-500 hover:text-white hover:font-normal hover:cursor-pointer">
      <td>{order?.id}</td>
      <td>{order?.User.username}</td>
      <td>{order?.totalPrice}</td>
      <td>{new Date(order?.createdAt).toLocaleString()}</td>
      <td>
        <span
          className="cursor-pointer underline"
          onClick={() => {
            onOpenSlip(order);
          }}
        >
          slip
        </span>
      </td>
      <td>{order?.orderStatus}</td>
      <td>
        <input
          type="checkbox"
          className="toggle toggle-info"
          checked={orderStatus}
          onChange={onChangeToggle}
        />
      </td>
    </tr>
  );
}
