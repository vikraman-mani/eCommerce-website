import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart1",
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      // action.payload = id of the product to be removed
      let newProduct = state.filter((product) => product.id !== action.payload);
      return newProduct;
    },
  },
});

export default cartSlice.reducer;

export let { addItem, removeItem } = cartSlice.actions;
