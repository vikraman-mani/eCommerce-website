import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice"; // Import the cart slice reducer

export const store = configureStore({
  reducer: {
    // Add your reducers here
    cart: cartSliceReducer,
  },
});
