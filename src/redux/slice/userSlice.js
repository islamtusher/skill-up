import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    panding: false,
    error: false,
    token: null,
  },
  reducers: {
    loginStart: (state) => {
      state.panding = true;
    },
    loginSuccess: (state, action) => {
      state.panding = false;
      state.userInfo = action.payload;
    },
    loginError: (state) => {
      state.error = true;
      state.panding = false;
    },
    logOut: (state) => {
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const { loginStart, loginSuccess, loginError, logOut } =
  userSlice.actions;
export default userSlice.reducer;
