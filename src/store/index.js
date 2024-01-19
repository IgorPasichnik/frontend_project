import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice/index";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: true,
});
