import axios from "./axios";

export const fetchAdminOrdersList = () =>
  axios.get("/order/fetchadminorderslist");

export const toggleOrderStatus = (orderId) =>
  axios.patch(`/order/toggleOrderStatus/${orderId}`);
