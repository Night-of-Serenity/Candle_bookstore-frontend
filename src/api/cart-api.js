import axios from "./axios";

export const addItemById = (input) => axios.post(`/cart/additem/`, input);

export const reduceItemById = (input) => axios.patch(`/cart/reduceitem`, input);

export const fetchCart = () => axios.get("/cart/fetchcart");

export const deleteItemFromCart = (bookId) =>
  axios.delete(`/cart/deleteitem/${bookId}`);
