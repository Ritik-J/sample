import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    //you can give any name to left like an variable like a: counter, b: counter, add: counter
    cart: cartSlice,
  },
});
