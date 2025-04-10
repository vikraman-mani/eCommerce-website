import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart1",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {},
  },
});

export default cartSlice.reducer;

export let { addItem, removeItem } = cartSlice.actions;
