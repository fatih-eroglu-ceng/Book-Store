import { Dispatch } from 'react';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice'; // Artık favoritesSlice'tan import ediyoruz
import { Product } from '../types/product';

export const handleFavoriteClick = (
  dispatch: Dispatch<any>,
  book: Product,
  isBookFavorite: boolean
) => {
  if (!book) return;

  if (isBookFavorite) {
    dispatch(removeFavorite(book.id)); 
  } else {
    dispatch(addFavorite(book)); 
  }
};
