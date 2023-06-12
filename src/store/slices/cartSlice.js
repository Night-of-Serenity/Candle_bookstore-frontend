import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    {
      id: 10,
      quantity: 1,
      price: 10.09,
      title: "To Kill a Mockingbird",
      author: "Ray Bradbury",
      book_cover: "",
    },
    {
      id: 12,
      quantity: 1,
      price: 20.65,
      discount: 0.19,
      title: "The Picture of Dorian Gray",
      author: "Judy Blume",
      book_cover: "",
    },
    {
      id: 26,
      quantity: 1,
      price: 16.78,
      discount: 0.27,
      title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
      author: "Charles Dickens",
      book_cover: "",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export default cartSlice.reducer;

// export const { updateProfileImage, updateCoverImage } = authSlice.actions;
