import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  getAll,
  deleteProduct,
  editProduct,
  getProductById,
} from "../services/productService";

const initialState = {
  list: [],
  product: {
    title: "",
    description: "",
    price: "",
  },
};
const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
    builder.addCase(addProduct.fulfilled, (state, { payload }) => {});
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {});
    builder.addCase(editProduct.fulfilled, (state, { payload }) => {});
    builder.addCase(getProductById.fulfilled, (state, { payload }) => {
      state.product = payload;
    });
  },
});

export default productSlice.reducer;
