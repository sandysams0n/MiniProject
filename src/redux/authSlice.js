import { createSlice } from "@reduxjs/toolkit";

/**
 * @param {boolean} isAuthenticated - state of authentication
 */
const initialAuthState = {
  isAuthenticated: false,
};

/**
 * authSlice is a slice of redux state that allows only signed in users to access
 * the website contents
 */
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
