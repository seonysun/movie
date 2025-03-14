import { configureStore } from "@reduxjs/toolkit";
import { likeSlice } from "./likeSlice";
import { modalSlice } from "./modalSlice";
import { loginSlice } from "./loginSlice";

export const store = configureStore({
  reducer: {
    like: likeSlice.reducer,
    modal: modalSlice.reducer,
    login: loginSlice.reducer,
  },
});
