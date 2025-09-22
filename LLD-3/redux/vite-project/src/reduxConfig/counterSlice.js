import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  reducers: {
    increment: (state) => {
      state.count = count + 1;
    },

    decrement: (state) => {
      if (count >= 1) {
        state.count = count - 1;
      }
    },

    reset: (state) => {
      state.count = 0;
    },
  },
});

export default counterSlice
