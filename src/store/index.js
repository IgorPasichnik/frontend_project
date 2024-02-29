import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice/index";

export const store = configureStore({
  reducer: {
    dataWeather: weatherReducer,
  },
  devTools: true,
});
