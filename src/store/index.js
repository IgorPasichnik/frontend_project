import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    user: userReducer,
  },
});
