import { configureStore } from '@reduxjs/toolkit';
import { reviewsReducer, productsReducer } from './slice';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    products: productsReducer,
  },
});
