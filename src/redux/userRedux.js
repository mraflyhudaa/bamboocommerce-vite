import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    isSuccess: false,
    error: false,
    message: '',
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.error = true;
      state.message = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.message = action.payload;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.error = true;
      state.message = action.payload;
    },
    reset: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.error = false;
      state.message = '';
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerFailure,
  registerStart,
  registerSuccess,
  reset,
} = userSlice.actions;
export default userSlice.reducer;
