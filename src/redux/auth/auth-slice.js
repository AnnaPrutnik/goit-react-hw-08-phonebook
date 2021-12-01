import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '.';

const { register, login, logout, getCurrentUser } = authOperations;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, _) {
      state.error = null;
      state.token = null;
    },
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = false;
    },
    [login.pending](state, _) {
      state.error = null;
      state.token = null;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = false;
    },
    [logout.pending](state, _) {
      state.error = null;
    },
    [logout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state, _) {
      state.isRefreshing = true;
      state.error = null;
    },
    [getCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [getCurrentUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
