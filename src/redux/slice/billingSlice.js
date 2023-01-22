import { createSlice } from "@reduxjs/toolkit";

const billingSlice = createSlice({
  name: "billing",
  initialState: {
    billPaid: false,
    panding: false,
    error: false,
  },
  reducers: {
    payLoading: (state) => {
      state.panding = true;
    },
    paySuccess: (state, action) => {
      state.panding = false;
      state.billPaid = action.payload;
    },
    payError: (state) => {
      state.error = true;
    },
  },
});

export const { payLoading, paySuccess, payError } = billingSlice.actions;
export default billingSlice.reducer;
