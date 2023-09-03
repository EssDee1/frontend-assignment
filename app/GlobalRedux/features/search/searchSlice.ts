'use client';

import { createSlice } from '@reduxjs/toolkit';
import { searchState } from '@/types';

const initialState: searchState = {
  allProducts: [],
  searchText: '',
  searchedResults: []
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setSearchedResults: (state, action) => {
      state.searchedResults = action.payload;
    },
  }
});

export const { setAllProducts, setSearchText, setSearchedResults } = searchSlice.actions;

export default searchSlice.reducer;