import axios from "./axios";

export const addBook = (input) => axios.post("/book/addbook", input);

export const getAllBooks = () => axios.get("/book/getall");

export const getBookById = (bookId) => axios.get(`/book/getbook/${bookId}`);

export const editBook = (input, bookId) =>
  axios.put(`/book/editbook/${bookId}`, input);

export const deleteBookById = (bookId) =>
  axios.delete(`/book/deletebook/${bookId}`);

// export const getBestseller = () => axios.get("/bestseller");
