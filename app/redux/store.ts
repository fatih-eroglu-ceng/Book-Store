import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import favoritesReducer from './favoritesSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { getSession } from 'next-auth/react';

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
});

const createPersistConfig = async () => {
  const session = await getSession();

  const email = session?.user?.email;

  return {
    key: `persist:${email}`,
    storage,
    whitelist: ['cart', 'favorites'],
  };
};

export const createStore = async () => {
  const persistConfig = await createPersistConfig();
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof createStore>['store']['dispatch'];
