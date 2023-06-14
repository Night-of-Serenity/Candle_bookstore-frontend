import axios from "./axios";

export const addItemById = (input) => axios.post(`/cart/additem/`, input);

export const removeItemById = (itemId) =>
  axios.post(`/cart/removeitem${itemId}`);

export const fetchCart = () => axios.get("/cart/fetchcart");
