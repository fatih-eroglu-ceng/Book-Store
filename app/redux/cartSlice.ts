'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../types/cart';

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const calculateTotalAmount = (items: CartItem[]) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
      state.totalAmount = calculateTotalAmount(state.items);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
