import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as CartApi from "../../api/cart-api";

const initialState = {
  cartItems: [
    // {
    //   id: 10,
    //   quantity: 1,
    //   price: 10.09,
    //   title: "To Kill a Mockingbird",
    //   author: "Ray Bradbury",
    //   book_cover: "",
    // },
    // {
    //   id: 12,
    //   quantity: 1,
    //   price: 20.65,
    //   discount: 0.19,
    //   title: "The Picture of Dorian Gray",
    //   author: "Judy Blume",
    //   book_cover: "",
    // },
    // {
    //   id: 26,
    //   quantity: 1,
    //   price: 16.78,
    //   discount: 0.27,
    //   title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
    //   author: "Charles Dickens",
    //   book_cover: "",
    // },
  ],
};

export const addItemToCartByIdAsync = createAsyncThunk(
  "cart/addItemToCartByIdAsync",
  async (input, thunkApi) => {
    try {
      console.log("add item obj", input);
      const res = await CartApi.addItemById(input);
      console.log("res axios add books by genre id", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const reduceItemByIdAsync = createAsyncThunk(
  "cart/reduceItemByIdAsync",
  async (input, thunkApi) => {
    try {
      const res = await CartApi.reduceItemById(input);
      console.log("res axios remove item from cart", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteItemByIdAsync = createAsyncThunk(
  "cart/deleteItemByIdAsync",
  async (input, thunkApi) => {
    try {
      const res = await CartApi.deleteItemFromCart(input);
      console.log("res axios remove item from cart", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const fetchCartAsync = createAsyncThunk(
  "cart/fetchCartAsync",
  async (_, thunkApi) => {
    try {
      const res = await CartApi.fetchCart();
      console.log("res axios fetch cart", res.data);
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addItemToCartByIdAsync.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(reduceItemByIdAsync.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(deleteItemByIdAsync.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      }),
});

export default cartSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
