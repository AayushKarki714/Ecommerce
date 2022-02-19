import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/features/cart-slice";
import productsReducer from "./reducer/features/products-slice";
import singleProductReducer from "./reducer/features/single-productSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
  },
});
