import axios from "./axios";

export const fetchAdminOrdersList = () =>
  axios.get("/order/fetchadminorderslist");
