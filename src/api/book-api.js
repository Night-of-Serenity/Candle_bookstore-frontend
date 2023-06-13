import axios from "./axios";

export const addbook = (input) => axios.post("/book/addbook", input);

export const getAllBooks = () => axios.get("/book/getall");

export const getBookById = (bookId) => axios.get(`book/getbook/${bookId}`);
