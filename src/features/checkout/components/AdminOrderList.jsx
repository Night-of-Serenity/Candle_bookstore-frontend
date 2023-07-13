import { useEffect, useState } from "react";
import AdminOrderListItem from "./AdminOrderListItem";
import * as OrderApi from "../../../api/order-api";

export default function AdminOrderList() {
  const [ordersList, setOrdersList] = useState([]);
  const fetchOrdersList = async () => {
    try {
      const res = await OrderApi.fetchAdminOrdersList();
      setOrdersList(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrdersList();
  }, []);
  return (
    <div className="overflow-x-auto h-screen">
      <table className="table table-pin-rows text-black">
        {/* head */}
        <thead>
          <tr className="bg-slate-600 text-white">
            <th>order id</th>
            <th>customer id</th>
            <th>total price</th>
            <th>order date-time</th>
            <th>slip</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {ordersList.length > 0 &&
            ordersList.map((order) => <AdminOrderListItem key={order.id} />)}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr className="bg-slate-600 text-white">
            <th>order id</th>
            <th>customer id</th>
            <th>total price</th>
            <th>order date-time</th>
            <th>slip</th>
            <th>status</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
