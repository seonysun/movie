import { configureStore } from "@reduxjs/toolkit";
import { likeSlice } from "./likeSlice";
import { modalSlice } from "./modalSlice";

export const store = configureStore({
  reducer: {
    like: likeSlice.reducer,
    modal: modalSlice.reducer,
  },
});
