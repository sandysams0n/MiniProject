import { configureStore } from "@reduxjs/toolkit";
import collegeReducer from "./collegeSlice";
import authReducer from "./authSlice";

/**
 * Store combines the reducer slices into one reducer
 */
export default configureStore({
  reducer: { college: collegeReducer, auth: authReducer },
});
