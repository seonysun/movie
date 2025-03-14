import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    user: {},
  },
  reducers: {
    logout(state) {
      state.isLogin = false;
      state.user = {};
    },
    login(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
  },
});
