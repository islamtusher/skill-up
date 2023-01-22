import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    panding: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.panding = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.panding = false;
      state.userInfo = action.payload;
      state.error = false;
    },
    loginError: (state) => {
      state.error = true;
      state.panding = false;
    },
    logOut: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loginStart, loginSuccess, loginError, logOut } =
  userSlice.actions;
export default userSlice.reducer;
