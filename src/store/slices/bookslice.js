import { createSlice } from "@reduxjs/toolkit";
import booksFile from "../../mock-data/mock_books.json";

// console.log(booksFile);

const initialState = {
  booksList: booksFile,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export default bookSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
