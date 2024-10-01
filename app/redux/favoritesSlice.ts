'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types/product'

interface FavoritesList {
  favorites: Product[]
}

const initialState: FavoritesList = {
  favorites: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload)
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload)
    }
  }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
