import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart1",
  initialState: [],
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
  },
});

export default cartSlice.reducer;

let { addItem, removeItem } = cartSlice.actions;
