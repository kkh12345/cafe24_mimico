import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: [],
  reducers: {
    setReviews: (state, a) => {
      return a.payload;
    },
  },
});

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, a) => {
      return a.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReviews } = reviewsSlice.actions;
export const { setProducts } = productsSlice.actions;

export const reviewsReducer = reviewsSlice.reducer;
export const productsReducer = productsSlice.reducer;
