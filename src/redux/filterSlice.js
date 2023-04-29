import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
