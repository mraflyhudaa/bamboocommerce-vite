import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
      state.quantity = state.products.reduce(
        (accumulator, item) => accumulator + item.amount,
        0
      );
      state.total = state.products.reduce(
        (accumulator, item) => accumulator + Number(item.price) * item.amount,
        0
      );
    },
    calculate: (state) => {
      state.quantity = state.products.reduce(
        (accumulator, item) => accumulator + item.amount,
        0
      );
      state.total = state.products.reduce(
        (accumulator, item) => accumulator + Number(item.price) * item.amount,
        0
      );
    },
  },
});

export const { clearCart, addProduct, removeProduct, calculate } =
  cartSlice.actions;
export default cartSlice.reducer;
