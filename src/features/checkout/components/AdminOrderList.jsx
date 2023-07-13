import { useEffect, useRef, useState } from "react";
import AdminOrderListItem from "./AdminOrderListItem";
import * as OrderApi from "../../../api/order-api";
import Modal from "../../../components/Modal";

export default function AdminOrderList() {
  const [ordersList, setOrdersList] = useState([]);
  const [slipOrder, setSlipOrder] = useState({});
  const modalRef = useRef();

  const fetchOrdersList = async () => {
    try {
      const res = await OrderApi.fetchAdminOrdersList();
      setOrdersList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeOrderStatus = async (orderId, orderStatus) => {
    const orderIndex = ordersList.findIndex((order) => order.id == orderId);
    if (orderIndex !== -1) {
      const newOrdersList = [...ordersList];
      newOrdersList[orderIndex].orderStatus =
        orderStatus == "pending" ? "confirmed" : "pending";
      setOrdersList(newOrdersList);
    }
  };

  const onOpenSlip = (order) => {
    setSlipOrder({ ...order });
    modalRef.current.click();
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
            <th>customer</th>
            <th>total price</th>
            <th>order date-time</th>
            <th>slip</th>
            <th>status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {ordersList.length > 0 &&
            ordersList.map((order) => (
              <AdminOrderListItem
                key={order.id}
                order={order}
                onOpenSlip={onOpenSlip}
                onChangeOrderStatus={onChangeOrderStatus}
              />
            ))}
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
            <th></th>
          </tr>
        </tfoot>
      </table>
      <div className="invisible">
        <Modal modalBtnRef={modalRef}>
          <div>
            <img src={slipOrder?.paymentSlip} />
          </div>
        </Modal>
      </div>
    </div>
  );
}
