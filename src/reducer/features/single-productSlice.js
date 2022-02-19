import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  status: "idle",
  error: null,
};

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async id => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    removeData(state) {
      state.product = [];
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchSingleProduct.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = { ...action.payload };
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const singleProductReducer = singleProductSlice.reducer;
export const { removeData } = singleProductSlice.actions;
export default singleProductReducer;
