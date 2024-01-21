import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      "https://658003026ae0629a3f5420c6.mockapi.io/api/test1/goods"
    );
    const products = await response.json();
    return products;
  }
);

const initialState = {
  list: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const { products } = action.payload;
      state.list = products;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {});
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {});
  },
});

export const getProducts = (state) => state.products.list;
export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
