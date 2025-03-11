import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "like",
  initialState: JSON.parse(localStorage.getItem("like")) || [],
  reducers: {
    addLike(state, action) {
      state.push(action.payload);

      localStorage.setItem("like", JSON.stringify(state));
    },
    unLike(state, action) {
      const index = state.indexOf(action.payload);
      if (index !== -1) state.splice(index, 1);

      localStorage.setItem("like", JSON.stringify(state));
    },
  },
});
