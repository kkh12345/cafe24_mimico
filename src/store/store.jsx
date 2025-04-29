import { configureStore } from '@reduxjs/toolkit';
import {
  reviewsReducer,
  productsReducer,
  isSearchModalShowReducer,
} from './slice';

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    products: productsReducer,
    isSearchModalShow: isSearchModalShowReducer,
  },
});
