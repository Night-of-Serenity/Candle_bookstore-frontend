import axios from "./axios";

export const addItemById = (input) => axios.post(`/cart/additem/`, input);

export const removeItemById = (input) => axios.patch(`/cart/removeitem`, input);

export const fetchCart = () => axios.get("/cart/fetchcart");
