import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    pending: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    loginError: (state) => {
      state.error = true;
      state.pending = false;
    },
    logOut: (state) => {
      state.userInfo = null;
      state.error = false
    },
  },
});

export const { loginStart, loginSuccess, loginError, logOut } =
  userSlice.actions;
export default userSlice.reducer;
