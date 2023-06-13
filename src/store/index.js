import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import bookReducer from "./slices/bookslice";
import cartReducer from "./slices/cartSlice";
import stockReducer from "./slices/stockSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
    cart: cartReducer,
    stock: stockReducer,
  },
});

export default store;
