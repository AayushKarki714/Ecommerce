import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: {
      reducer(state, action) {
        const existingItem = state.items.find(
          item => item.id === action.payload.id
        );
        state.totalQuantity++;
        if (existingItem) {
          existingItem.quantity++;
          state.totalAmount = Number(
            (state.totalAmount + existingItem.price).toFixed(2)
          );
        } else {
          state.items.push(action.payload);
          state.totalAmount = Number(
            (state.totalAmount + action.payload.price).toFixed(2)
          );
        }
      },
      prepare(data) {
        return {
          payload: {
            ...data,
            quantity: 1,
          },
        };
      },
    },
    removeItemToCart(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount = Number(
          (state.totalAmount - existingItem.price).toFixed(2)
        );
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== action.payload);
        } else {
          existingItem.quantity--;
        }
      }
    },
  },
});

const cartReducer = cartSlice.reducer;

export const { addItemToCart, removeItemToCart } = cartSlice.actions;
export default cartReducer;
