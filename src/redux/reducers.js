import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
