import axios from "./axios";

export const addbook = (input) => axios.post("/book/addbook", input);
