import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as BookApi from "../../api/book-api";

const initialState = {
  bookStock: [],
};

export const fetchStockAsync = createAsyncThunk(
  "stock/fetchStockAsync",
  async (_, thunkApi) => {
    try {
      const res = await BookApi.getAllBooks();
      return res.data.bookList;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchStockAsync.fulfilled, (state, action) => {
      state.bookStock = action.payload;
    }),
});

export default stockSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
