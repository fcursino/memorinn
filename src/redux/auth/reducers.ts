import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from './actions';
import { initialState } from './state';

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state = action.payload
    })
    .addCase(logout, (state, action) => {
      state = action.payload;
    })
});

export default authReducer;
