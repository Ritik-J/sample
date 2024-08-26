import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 5,
  reducers: {
    increaseby1: (state) => state + 1,
    increaseby2: (state) => state + 2,
    increaseby3: (state) => state + 3,
    increaseby4: (state) => state + 4,
  },
});

export const { increaseby1, increaseby2, increaseby3, increaseby4 } =
  counterSlice.actions;

export default counterSlice.reducer;
