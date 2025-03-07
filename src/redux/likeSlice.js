import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "like",
  initialState: [],
  reducers: {
    addLike(state, action) {
      state.push(action.payload);
    },
    unLike(state, action) {
      const index = state.indexOf(action.payload);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
