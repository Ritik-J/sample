import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      //whenever you need to send data from child componenet to parent you need to use action parameter with .payload
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotalPrice = (state) => state.cart.totalPrice;

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
