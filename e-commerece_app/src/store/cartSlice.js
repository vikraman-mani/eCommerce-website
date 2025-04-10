import { createSlice } from "@reduxjs/toolkit";

let dataFromWeb = JSON.parse(localStorage.getItem("cart"));

const cartSlice = createSlice({
  name: "cart1",
  initialState: dataFromWeb,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify([...state]));
    },
    removeItem(state, action) {
      // action.payload = id of the product to be removed
      let newProduct = state.filter((product) => product.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify([...newProduct]));
      return newProduct;
    },
  },
});

export default cartSlice.reducer;

export let { addItem, removeItem } = cartSlice.actions;
