/* eslint-disable react/prop-types */
import { useState } from "react";
export default function AdminOrderListItem({
  order,
  onChangeOrderStatus,
  onOpenSlip,
}) {
  const initialOrderStatus = order?.orderStatus == "pending" ? false : true;
  const [toggleOrderStatus, setToggleOrderStatus] =
    useState(initialOrderStatus);

  const onChangeToggle = (e) => {
    e.preventDefault();
    console.dir(e.target);
    setToggleOrderStatus(e.target.checked);
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
          className=" bg-white toggle toggle-info"
          checked={toggleOrderStatus}
          onChange={onChangeToggle}
        />
      </td>
    </tr>
  );
}
