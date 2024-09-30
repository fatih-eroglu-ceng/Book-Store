'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

interface FavoritesState {
  favorites: Product[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      const existingFavorite = state.favorites.find(favorite => favorite.id === action.payload.id);
      if (!existingFavorite) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
