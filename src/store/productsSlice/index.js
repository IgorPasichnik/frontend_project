import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.list = action.payload;
    },
    deleteSingleProduct: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter((product) => product.id !== id);
    },
  },
});

export const { addProducts, deleteSingleProduct } = productsSlice.actions;
export default productsSlice.reducer;
