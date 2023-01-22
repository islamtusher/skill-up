import { createSlice } from "@reduxjs/toolkit";

const examScoreSlice = createSlice({
  name: "examScore",
  initialState: {
    score: 0,
    panding: false,
    error: false,
  },
  reducers: {
    scoreLoading: (state) => {
        state.panding = true;
    },
    scoreLoadSuccess: (state, action) => {
        state.panding = false;
        state.score = action.payload;
    },
    scoreLoadError: (state) => {
        state.error = true;
    }
  },
});

export const { scoreLoading, scoreLoadSuccess, scoreLoadError } = examScoreSlice.actions
export default examScoreSlice.reducer