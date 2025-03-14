import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    loading: false,
    user: {},
  },
  reducers: {
    logout(state) {
      state.isLogin = false;
      state.loading = false;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.rejected, (state) => {
        state.loading = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLogin = true;
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export const userLogin = createAsyncThunk("login/userLogin", async (user) => {
  return user;
});
