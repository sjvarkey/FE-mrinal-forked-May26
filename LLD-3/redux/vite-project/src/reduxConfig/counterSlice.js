import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      if (state.count >= 1) {
        state.count = state.count - 1;
      }
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// ✅ Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// ✅ Export reducer
export default counterSlice.reducer;