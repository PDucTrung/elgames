import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
