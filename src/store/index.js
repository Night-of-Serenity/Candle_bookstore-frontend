import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bookReducer from ".//slices/bookslice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
  },
});

export default store;
