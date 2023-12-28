import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk("products/getAll", async () => {
  let res = await axios.get("http://localhost:8080/products");
  return res.data;
});

export const addProduct = createAsyncThunk("products/add", async (product) => {
  let res = await axios.post("http://localhost:8080/products", product);
  return res.data;
});

export const editProduct = createAsyncThunk(
  "products/edit",
  async ({ id, product }) => {
    console.log(product);
    let res = await axios.put(`http://localhost:8080/products/${id}`, product);
    console.log(res);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  let res = await axios.delete(`http://localhost:8080/products/${id}`);
  return res.data;
});

export const getProductById = createAsyncThunk(
  "products/getById",
  async (id) => {
    let res = await axios.get(`http://localhost:8080/products/${id}`);
    return res.data;
  }
);
